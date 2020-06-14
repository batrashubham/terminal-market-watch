import chalk from "chalk";
import boxen, { BorderStyle} from "boxen";

const greeting = chalk.greenBright.bold("Terminal Market Watch _-^-_");

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: BorderStyle.Round,
    borderColor: 'green',
    backgroundColor: "#555555",
    float: 'center'
};

// @ts-ignore
export const WelcomeMessage = boxen( greeting, boxenOptions );
