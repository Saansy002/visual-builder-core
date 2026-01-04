import { THEME_VARS } from './themeVars';
import { GlobalStyles } from '../schema/page';

export const applyGlobalStyles = (styles?: GlobalStyles) => {
  if (!styles) return {};

  const cssVars: Record<string, string> = {};

  if (styles.colorText)
    cssVars[THEME_VARS.colorText] = styles.colorText;

  if (styles.colorPrimary)
    cssVars[THEME_VARS.colorPrimary] = styles.colorPrimary;

  if (styles.background)
    cssVars[THEME_VARS.colorBackground] = styles.background;

  if (styles.fontFamily)
    cssVars[THEME_VARS.fontFamily] = styles.fontFamily;

  if (styles.fontSizeBase)
    cssVars[THEME_VARS.fontSizeBase] = styles.fontSizeBase;

  return cssVars;
};
