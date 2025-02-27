import {Args, Command, Flags} from '@oclif/core'

export default class Download extends Command {
  static args = {
    url: Args.string({description: 'URL to download from', required: true}),
  }
  static description = 'Download content from specified URL'
  static examples = [
    `<%= config.bin %> <%= command.id %> https://example.com/file.txt --output myfile.txt
Download content from https://example.com/file.txt to myfile.txt
`,
  ]
  static flags = {
    output: Flags.string({char: 'o', description: 'Output file path', required: false}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Download)

    this.log(`Downloading from ${args.url}${flags.output ? ` to ${flags.output}` : ''}...`)

    try {
      // ここに実際のダウンロード処理を実装します
      // 例: fetch APIを使用してコンテンツをダウンロードし、ファイルに保存する
      this.log('Download completed successfully!')
    } catch (error) {
      this.error(`Download failed: ${error instanceof Error ? error.message : String(error)}`)
    }
  }
}
