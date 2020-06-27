import { TextColors } from './appTheme';

export function getPrimaryColoredText(text: string): string {
    return TextColors.Primary.bold(text);
}
