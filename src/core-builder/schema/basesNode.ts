export type NodeType = 'section' | 'column' | 'text';

export interface StyleMap {
  desktop?: Record<string, string>;
}

export interface BasesNode {
  id: string;
  type: NodeType;
  children?: BasesNode[];
  isContainer: boolean;
  props?: Record<string, any>;
  styles?: StyleMap;
}
