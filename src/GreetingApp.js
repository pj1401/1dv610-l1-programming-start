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
    this.#greeting.push('Hello\n')

    const chars = this.#name.split('')

    for (let i = 0; i < chars.length; i++) {
      for (let j = 0; j < chars.length; j++) {
        this.#greeting.push(chars[j])
      }
      chars.pop()
      this.#greeting.push('\n')
    }
  }
}
