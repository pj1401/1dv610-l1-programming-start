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
    return this.#name
  }

  /**
   * Run the greeting application.
   */
  async run () {
    console.log('Hello World!')
  }
}
