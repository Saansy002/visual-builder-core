import { StyleMap } from "./styleTypes";
import { Breakpoint } from "./breakpoints";

export function resolveStyles(
  styles: StyleMap = {},
  active: Breakpoint
): Record<string, string | number> {
  return {
    ...(styles.desktop || {}),
    ...(active === "tablet" && styles.tablet),
    ...(active === "mobile" && styles.mobile)
  };
}
