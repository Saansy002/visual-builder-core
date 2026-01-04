import { BasesNode } from './basesNode';

export interface GlobalStyles {
  colorText?: string;
  colorPrimary?: string;
  background?: string;
  fontFamily?: string;
  fontSizeBase?: string;
}

export interface PageSchema {
  id: string;
  globalStyles?: GlobalStyles;
  root: BasesNode[];
}
