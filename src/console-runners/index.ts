import "#core/load-env.js";
import inquirer from "inquirer";

let exit = false;
while (!exit) {
  const answer = await inquirer.prompt({
    name: "consoleRunner",
    type: "list",
    message: "Which console-runner do you want to run?",
    choices: ["seed-data", "exit"],
  });
  if (answer.consoleRunner !== "exit") {
    const { run } = await import(`./${answer.consoleRunner}.runner.js`);
    await run();
  } else {
    exit = true;
  }
}
