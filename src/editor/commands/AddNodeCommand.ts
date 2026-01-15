import { Command } from "./Command";
import { BaseNode, NodeType } from "../../core-builder/schema/baseNode";
import { resolveInsert } from "../../core-builder/layout/resolveInsert";

export class AddNodeCommand implements Command {
  constructor(
    private parentId: string,
    private type: NodeType
  ) {}

  execute(page: BaseNode): BaseNode {
    const insert = (node: BaseNode): BaseNode => {
      if (node.id === this.parentId) {
        return {
          ...node,
          children: [
            ...node.children,
            ...resolveInsert(node, this.type)
          ]
        };
      }
      return {
        ...node,
        children: node.children.map(insert)
      };
    };
    return insert(page);
  }

  undo(page: BaseNode): BaseNode {
    // Simple undo: remove last child from parent
    const remove = (node: BaseNode): BaseNode => {
      if (node.id === this.parentId) {
        return {
          ...node,
          children: node.children.slice(0, -1)
        };
      }
      return {
        ...node,
        children: node.children.map(remove)
      };
    };
    return remove(page);
  }
}
