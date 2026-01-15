import { PageSchema } from '../core-builder/schema/page';
import { THEME_VARS } from '../core-builder/style-engine/themeVars';

export function exportCSS(page: PageSchema): string {
  const lines: string[] = [];

  lines.push(':root {');

  if (page.globalStyles) {
    if (page.globalStyles.colorText) {
      lines.push(`  ${THEME_VARS.colorText}: ${page.globalStyles.colorText};`);
    }
    if (page.globalStyles.colorPrimary) {
      lines.push(`  ${THEME_VARS.colorPrimary}: ${page.globalStyles.colorPrimary};`);
    }
    if (page.globalStyles.background) {
      lines.push(`  ${THEME_VARS.colorBackground}: ${page.globalStyles.background};`);
    }
    if (page.globalStyles.fontFamily) {
      lines.push(`  ${THEME_VARS.fontFamily}: ${page.globalStyles.fontFamily};`);
    }
    if (page.globalStyles.fontSizeBase) {
      lines.push(`  ${THEME_VARS.fontSizeBase}: ${page.globalStyles.fontSizeBase};`);
    }
  }

  lines.push('}');
  lines.push('');

  lines.push(`
p {
  color: var(${THEME_VARS.colorText});
  font-size: var(${THEME_VARS.fontSizeBase});
  font-family: var(${THEME_VARS.fontFamily});
}

section {
  padding: var(${THEME_VARS.spacingLg});
}

.vb-container {
  padding: var(${THEME_VARS.spacingMd});
}
`.trim());

  return lines.join('\n');
}
