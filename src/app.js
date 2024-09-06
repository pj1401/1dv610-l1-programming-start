/**
 * @file The starting point of the application.
 * @author Patricia Johansson <pj222uc@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Start the Application.
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
  startApplication(name)
} catch (error) {
  console.error(error.message)
}
