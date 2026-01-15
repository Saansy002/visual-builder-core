import { Breakpoint } from "./breakpoints";

export type StyleMap = {
  [K in Breakpoint]?: Record<string, string | number>;
};

