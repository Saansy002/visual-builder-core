import { StyleMap } from './../schema/basesNode';

export const applyStyles = (styles?: StyleMap) => {
  if (!styles?.desktop) return {};

  const cssVars: Record<string, string> = {};

  Object.entries(styles.desktop).forEach(([key, value]) => {
    cssVars[`--${key}`] = value;
  });

  return cssVars;
};
