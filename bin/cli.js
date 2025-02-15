const yargs = require('yargs/yargs')
const generateHTMLTemplate = require('./cli/generateHTMLTemplate')
const generateICANNList = require('./cli/generateICANNList')
const generatePreviewTemplatingTable = require('./cli/generatePreviewTemplatingTable')
const parseLanguageTagExtensionList = require('./cli/parseLanguageTagExtensionList')

yargs(process.argv.slice(2))
  .command(
    'generate-html-template',
    '',
    (command) =>
      command
        .option('csaf20Schema', { alias: 'csaf', type: 'string' })
        .option('cvss31Schema', { alias: 'cvss-3.1', type: 'string' })
        .demandOption(['csaf20Schema', 'cvss31Schema']),
    generateHTMLTemplate
  )
  .command(
    'generate-icann-list',
    '',
    (command) =>
      command.option('registry', { type: 'string' }).demandOption('registry'),
    generateICANNList
  )
  .command(
    'parse-language-tag-extension-list',
    '',
    (command) =>
      command.option('registry', { type: 'string' }).demandOption('registry'),
    parseLanguageTagExtensionList
  )
  .command(
    'generate-preview-templating-table',
    '',
    (command) =>
      command
        .option('csaf20Schema', { alias: 'csaf', type: 'string' })
        .option('cvss31Schema', { alias: 'cvss-3.1', type: 'string' })
        .option('cvss20Schema', { alias: 'cvss-2', type: 'string' })
        .demandOption(['csaf20Schema', 'cvss31Schema', 'cvss20Schema']),
    generatePreviewTemplatingTable
  )
  .demandCommand(1)
  .help()
  .version(false).argv
