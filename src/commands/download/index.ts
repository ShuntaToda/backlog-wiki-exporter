import {Args, Command, Flags} from '@oclif/core'
import * as dotenv from 'dotenv'
import ky from 'ky'
import * as fs from 'node:fs/promises'
import path from 'node:path'

// .envファイルを読み込む
dotenv.config()

export default class Download extends Command {
  static args = {
    url: Args.string({description: 'URL to download from', required: false}),
  }
  static description = 'Download content from Backlog Wiki'
  static examples = [
    `<%= config.bin %> <%= command.id %> --domain cm1.backlog.jp --projectId PROJECT_ID --apiKey YOUR_API_KEY --output ./wiki-data
Download wiki content from Backlog using API key
`,
  ]
  static flags = {
    apiKey: Flags.string({
      description: 'Backlog API key (環境変数 BACKLOG_API_KEY からも自動読み取り可能)',
      required: false,
    }),
    domain: Flags.string({description: 'Backlog domain (e.g. example.backlog.jp)', required: true}),
    output: Flags.string({char: 'o', default: './backlog-wiki', description: 'Output directory path', required: false}),
    projectIdOrKey: Flags.string({description: 'Backlog project ID or key', required: true}),
  }

  // APIキーを取得する（優先順位: コマンドライン引数 > 環境変数）
  getApiKey(providedApiKey?: string): string {
    // コマンドライン引数からのAPIキー
    if (providedApiKey) {
      return providedApiKey
    }

    // 環境変数からのAPIキー
    const envApiKey = process.env.BACKLOG_API_KEY
    if (envApiKey) {
      this.log('Using API key from environment variable BACKLOG_API_KEY')
      return envApiKey
    }

    // APIキーが見つからない場合はエラー
    this.error('API key not found. Please provide it via --apiKey flag or BACKLOG_API_KEY environment variable')
    return '' // この行は実行されないが、TypeScriptのエラーを回避するために必要
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(Download)

    const {domain, output: outputDir, projectIdOrKey} = flags
    const apiKey = this.getApiKey(flags.apiKey)

    const baseUrl = `https://${domain}/api/v2`

    this.log(`Downloading wiki content from ${domain} for project ${projectIdOrKey}...`)

    try {
      // 出力ディレクトリの作成
      await fs.mkdir(outputDir, {recursive: true})

      // Wiki一覧の取得
      this.log('Fetching wiki list...')
      const wikis = await ky
        .get(`${baseUrl}/wikis?apiKey=${apiKey}&projectIdOrKey=${projectIdOrKey}`)
        .json<Array<{id: string; name: string}>>()
      console.log(wikis)

      this.log(`Found ${wikis.length} wikis.`)

      // 各Wikiの詳細情報を取得
      this.log('Fetching wiki details...')

      // Promise.allを使用して並列処理
      const wikiPromises = wikis.map(async (wiki) => {
        const wikiId = wiki.id
        this.log(`Fetching wiki: ${wiki.name} (ID: ${wikiId})`)

        try {
          const wikiDetail = await ky
            .get(`${baseUrl}/wikis/${wikiId}?projectIdOrKey=${projectIdOrKey}&apiKey=${apiKey}`)
            .json<Record<string, unknown>>()

          // Wikiの詳細情報をJSONファイルとして保存
          // Wikiの名前をファイルパスとして使用
          const wikiName = wiki.name

          // ファイル名に使用できない文字を置き換え
          // スラッシュはディレクトリ区切りとして使用するため残す
          const invalidChars = ['\\', ':', '*', '?', '"', '<', '>', '|']
          let sanitizedName = wikiName
          for (const char of invalidChars) {
            sanitizedName = sanitizedName.replaceAll(char, '_')
          }

          // ファイル名の拡張子を追加
          const wikiFileName = `${sanitizedName}.md`

          // ディレクトリ構造を作成（必要な場合）
          const dirPath = path.dirname(wikiFileName)
          if (dirPath !== '.') {
            await fs.mkdir(path.join(outputDir, dirPath), {recursive: true})
          }

          // Markdownファイルを保存
          const wikiFilePath = path.join(outputDir, wikiFileName)

          // JSONからcontentフィールドを取得
          const content = (wikiDetail.content as string) || ''

          // BacklogのWikiへのリンクを作成
          const backlogWikiUrl = `https://${domain}/alias/wiki/${wikiId}`

          // Markdownファイルに書き込む（タイトルとBacklogリンクを追加）
          const markdownContent = `# ${wiki.name}\n\n[Backlog Wiki Link](${backlogWikiUrl})\n\n${content}`
          await fs.writeFile(wikiFilePath, markdownContent)

          this.log(`Wiki "${wiki.name}" saved to ${wikiFilePath}`)
        } catch (error) {
          this.warn(`Failed to fetch wiki ID ${wikiId}: ${error instanceof Error ? error.message : String(error)}`)
        }
      })

      await Promise.all(wikiPromises)

      this.log('Download completed successfully!')
    } catch (error) {
      this.error(`Download failed: ${error instanceof Error ? error.message : String(error)}`)
    }
  }
}
