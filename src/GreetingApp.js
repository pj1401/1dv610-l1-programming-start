/**
 * @file The main application.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents the Greeting App.
 */
export class GreetingApp {
  #name

  #greeting

  /**
   * Initialises a new instance.
   *
   * @param {string} name - A name.
   */
  constructor (name) {
    this.#name = name
  }

  /**
   * Returns a string representing the object.
   *
   * @returns {string} A greeting.
   */
  toString () {
    return this.#greeting.join('')
  }

  /**
   * Run the greeting application.
   */
  async run () {
    this.#greeting = []

    const hello = 'Hello '

    // Split the greeting into chars.
    const chars = hello.split('').concat([...this.#name.split(''), '!'])

    const usedChars = []

    for (let i = 0, length = chars.length; i < length; i++) {
      for (let j = 0; j < chars.length; j++) {
        this.#greeting.push(chars[j])
      }
      usedChars.push(chars.pop())
      this.#greeting.push('\n')
    }

    this.#greeting.push('\n')

    // Get the greeting in reverse.
    for (let i = 0, length = usedChars.length; i < length; i++) {
      for (let j = 0; j <= i; j++) {
        this.#greeting.push(usedChars[j])
      }
      if (i !== length - 1) {
        this.#greeting.push('\n')
      }
    }
  }
}
