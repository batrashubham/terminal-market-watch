import { AppTitle } from '../Constants/constants';
import boxen, { BorderStyle, Options } from 'boxen';
import chalk from 'chalk';

const title = chalk.greenBright.bold(AppTitle);

const boxenOptions: Options = {
    padding: 1,
    margin: 1,
    borderStyle: BorderStyle.Round,
    borderColor: 'green',
    backgroundColor: 'grey',
    float: 'center',
};

export function renderAppBanner(): void {
    console.log(boxen(title, boxenOptions));
}
