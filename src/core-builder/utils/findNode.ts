import { BaseNode } from "../schema/baseNode";
import { PageSchema } from "../schema/page";

export function findNode(
  page: PageSchema,
  id: string
): BaseNode | null {
  for (const node of page.root) {
    if (node.id === id) return node;
    const found = findNodeInTree(node, id);
    if (found) return found;
  }
  return null;
}

function findNodeInTree(
  node: BaseNode,
  id: string
): BaseNode | null {
  if (node.id === id) return node;

  for (const child of node.children) {
    const found = findNodeInTree(child, id);
    if (found) return found;
  }

  return null;
}
