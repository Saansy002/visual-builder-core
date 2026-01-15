import { NodeType } from "./baseNode";

export const ALLOWED_CHILDREN: Record<NodeType, NodeType[]> = {
  page: ["section"],
  section: ["container"],
  container: ["widget", "text"],
  widget: [],
  text: []
};