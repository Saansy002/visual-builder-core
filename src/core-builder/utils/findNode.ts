import { BaseNode } from "../schema/baseNode";

export function findNode(
  node: BaseNode,
  id: string
): BaseNode | null {
  if (node.id === id) return node;

  for (const child of node.children) {
    const found = findNode(child, id);
    if (found) return found;
  }

  return null;
}
