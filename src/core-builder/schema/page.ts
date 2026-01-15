import { BaseNode } from './baseNode';

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
  root: BaseNode[];
}

export interface PageNode extends BaseNode {
  type: "page";
}