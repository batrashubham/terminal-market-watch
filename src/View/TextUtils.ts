import { TextColors } from "./AppTheme";

export function getPrimaryColoredText(text: string): string {
    return TextColors.Primary.bold(text);
}