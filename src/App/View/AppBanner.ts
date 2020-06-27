import { getPrimaryColoredText } from './textUtils';
import { AppTitle } from '../Constants/constants';
import boxen, { BorderStyle, Options } from 'boxen';

const title = getPrimaryColoredText(AppTitle);

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
