export const extractTitleFromNoteBody = (body?: string) =>
  body
    ?.split('\n')
    .filter(line => line.length)[0]
    ?.match(/[\w\s?!.]+/g)
    ?.reduce((longest, curr) => (curr.length > longest.length ? curr : longest))
    .trim()
