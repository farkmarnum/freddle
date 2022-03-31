import { generateEmojiGrid } from './share'
import * as words from './words'

describe('generateEmojiGrid', () => {
  let originalSolutionValue: string

  beforeAll(() => {
    originalSolutionValue = words.solution
  })

  test('generates grid', () => {
    const guesses = ['EDCBA', 'VWXYZ', 'ABCDE']
    const tiles = ['C', 'P', 'A'] // Correct, Present, Absent

    // @ts-ignore
    words.solution = 'ABCDE'

    const grid = generateEmojiGrid(guesses, tiles)
    const gridParts = grid.split('\n')
    expect(gridParts[0]).toBe('PPCPP')
    expect(gridParts[1]).toBe('AAAAA')
    expect(gridParts[2]).toBe('CCCCC')
  })

  test('generates grid for ascii', () => {
    const guesses = ['5️⃣4️⃣3️⃣2️⃣1️⃣', '♠️♥️♦️♣️🔔', '1️⃣2️⃣3️⃣4️⃣5️⃣']
    const tiles = ['C', 'P', 'A'] // Correct, Present, Absent

    // @ts-ignore
    words.solution = '1️⃣2️⃣3️⃣4️⃣5️⃣'

    const grid = generateEmojiGrid(guesses, tiles)
    const gridParts = grid.split('\n')
    expect(gridParts[0]).toBe('PPCPP')
    expect(gridParts[1]).toBe('AAAAA')
    expect(gridParts[2]).toBe('CCCCC')
  })

  afterAll(() => {
    // @ts-ignore
    words.solution = originalSolutionValue
  })
})
