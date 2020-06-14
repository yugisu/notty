const symbolsToRemoveRegexp = /<[^>]*\/?>|#/gim

export const extractTitleFromNoteBody = (body?: string) =>
  body
    ?.split('\n')
    .map(line => line.trim())
    .filter(line => line.length)[0]
    ?.replace(symbolsToRemoveRegexp, '')
    .trim()
