export type NodeType =
  | "page"
  | "section"
  | "container"
  | "widget"
  | "text";

export interface BaseNode {
  id: string;
  type: NodeType;
  props: Record<string, any>;
  children: BaseNode[];
}
