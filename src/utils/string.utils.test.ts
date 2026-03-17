import { describe, expect, it } from 'vitest'
import { capitalizeFirstLetter } from './string.utils'

describe('capitalizeFirstLetter', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello')
  })

  it('should return an empty string if the input is an empty string', () => {
    expect(capitalizeFirstLetter('')).toBe('')
  })

  it('should not change a string that already has a capitalized first letter', () => {
    expect(capitalizeFirstLetter('Hello')).toBe('Hello')
  })
})
