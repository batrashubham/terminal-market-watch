const chalk = require("chalk");
const boxen = require("boxen");

const greeting = chalk.greenBright.bold("Terminal Market Watch _-^-_");

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555"
};

export const WelcomeMessage = boxen( greeting, boxenOptions );
