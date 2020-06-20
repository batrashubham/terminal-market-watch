import boxen, { BorderStyle, Options } from 'boxen';
import { BoxTheme } from './appTheme';

const boxenOptions: Options = {
    padding: 1,
    margin: 1,
    borderStyle: BorderStyle.Round,
    borderColor: BoxTheme.BorderColor,
    backgroundColor: BoxTheme.BgColor,
    float: 'center',
};

export function getTextWrappedInBox(text: string): string {
    return boxen(text, boxenOptions);
}
