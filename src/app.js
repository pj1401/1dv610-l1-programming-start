/**
 * @file The starting point of the application.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

import { GreetingApp } from './GreetingApp.js'

/**
 * Start the Application.
 *
 * @param {string} name - A name.
 */
async function startGreetingApp (name) {
  const greeting = new GreetingApp(name)

  // Run the application.
  await greeting.run()

  console.log(greeting.toString())
}

try {
  // Parse the command-line (skip the first two arguments).
  const [,, name] = process.argv
  startGreetingApp(name)
} catch (error) {
  console.error(error.message)
}
