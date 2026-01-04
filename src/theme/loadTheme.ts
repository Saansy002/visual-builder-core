import { ThemeJSON } from './theme.schema';
import { GlobalStyles } from '../core-builder/schema/page';

export const loadTheme = (theme: ThemeJSON): GlobalStyles => {
  return {
    colorText: theme.colors.text,
    colorPrimary: theme.colors.primary,
    background: theme.colors.background,
    fontFamily: theme.typography.fontFamily,
    fontSizeBase: theme.typography.baseFontSize,
  };
};
