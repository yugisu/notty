import { customAlphabet } from 'nanoid'

const ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const ID_LENGTH = 6

export const generateId = customAlphabet(ALPHABET, ID_LENGTH)

export const isNoteId = (id: string) => new RegExp(`[${ALPHABET}]{${ID_LENGTH}}`).test(id)
