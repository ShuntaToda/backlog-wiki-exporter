backlog-wiki-exporter
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/backlog-wiki-exporter.svg)](https://npmjs.org/package/backlog-wiki-exporter)
[![Downloads/week](https://img.shields.io/npm/dw/backlog-wiki-exporter.svg)](https://npmjs.org/package/backlog-wiki-exporter)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g backlog-wiki-exporter
$ bwe COMMAND
running command...
$ bwe (--version)
backlog-wiki-exporter/0.0.0 darwin-arm64 node-v20.18.1
$ bwe --help [COMMAND]
USAGE
  $ bwe COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bwe hello PERSON`](#bwe-hello-person)
* [`bwe hello world`](#bwe-hello-world)
* [`bwe help [COMMAND]`](#bwe-help-command)
* [`bwe plugins`](#bwe-plugins)
* [`bwe plugins add PLUGIN`](#bwe-plugins-add-plugin)
* [`bwe plugins:inspect PLUGIN...`](#bwe-pluginsinspect-plugin)
* [`bwe plugins install PLUGIN`](#bwe-plugins-install-plugin)
* [`bwe plugins link PATH`](#bwe-plugins-link-path)
* [`bwe plugins remove [PLUGIN]`](#bwe-plugins-remove-plugin)
* [`bwe plugins reset`](#bwe-plugins-reset)
* [`bwe plugins uninstall [PLUGIN]`](#bwe-plugins-uninstall-plugin)
* [`bwe plugins unlink [PLUGIN]`](#bwe-plugins-unlink-plugin)
* [`bwe plugins update`](#bwe-plugins-update)

## `bwe hello PERSON`

Say hello

```
USAGE
  $ bwe hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ bwe hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/workspace/backlog-wiki-exporter/blob/v0.0.0/src/commands/hello/index.ts)_

## `bwe hello world`

Say hello world

```
USAGE
  $ bwe hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ bwe hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/workspace/backlog-wiki-exporter/blob/v0.0.0/src/commands/hello/world.ts)_

## `bwe help [COMMAND]`

Display help for bwe.

```
USAGE
  $ bwe help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for bwe.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.26/src/commands/help.ts)_

## `bwe plugins`

List installed plugins.

```
USAGE
  $ bwe plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ bwe plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/index.ts)_

## `bwe plugins add PLUGIN`

Installs a plugin into bwe.

```
USAGE
  $ bwe plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into bwe.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the BWE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the BWE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ bwe plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ bwe plugins add myplugin

  Install a plugin from a github url.

    $ bwe plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ bwe plugins add someuser/someplugin
```

## `bwe plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ bwe plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ bwe plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/inspect.ts)_

## `bwe plugins install PLUGIN`

Installs a plugin into bwe.

```
USAGE
  $ bwe plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into bwe.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the BWE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the BWE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ bwe plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ bwe plugins install myplugin

  Install a plugin from a github url.

    $ bwe plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ bwe plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/install.ts)_

## `bwe plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ bwe plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ bwe plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/link.ts)_

## `bwe plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ bwe plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bwe plugins unlink
  $ bwe plugins remove

EXAMPLES
  $ bwe plugins remove myplugin
```

## `bwe plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ bwe plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/reset.ts)_

## `bwe plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ bwe plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bwe plugins unlink
  $ bwe plugins remove

EXAMPLES
  $ bwe plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/uninstall.ts)_

## `bwe plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ bwe plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bwe plugins unlink
  $ bwe plugins remove

EXAMPLES
  $ bwe plugins unlink myplugin
```

## `bwe plugins update`

Update installed plugins.

```
USAGE
  $ bwe plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.34/src/commands/plugins/update.ts)_
<!-- commandsstop -->
