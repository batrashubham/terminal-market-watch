import boxen, { BorderStyle } from 'boxen';
import { BoxTheme } from './appTheme';

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: BorderStyle.Round,
    borderColor: BoxTheme.BorderColor,
    backgroundColor: BoxTheme.BgColor,
    float: 'center',
};

export function getTextWrappedInBox(text: string) {
    //@ts-ignore
    return boxen(text, boxenOptions);
}
