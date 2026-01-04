import { StyleMap } from '../schema/basesNode';
import { THEME_VARS } from './themeVars';

const STYLE_KEY_MAP: Record<string, string> = {
  color: THEME_VARS.colorText,
  background: THEME_VARS.colorBackground,
  fontSize: THEME_VARS.fontSizeBase,
  fontFamily: THEME_VARS.fontFamily,
  padding: THEME_VARS.spacingMd,
  margin: THEME_VARS.spacingMd,
};

export const applyStyles = (styles?: StyleMap) => {
  if (!styles?.desktop) return {};

  const cssVars: Record<string, string> = {};

  Object.entries(styles.desktop).forEach(([key, value]) => {
    const cssVar = STYLE_KEY_MAP[key];
    if (cssVar) {
      cssVars[cssVar] = value;
    }
  });

  return cssVars;
};
