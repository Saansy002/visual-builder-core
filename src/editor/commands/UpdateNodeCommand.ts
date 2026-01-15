import { Command } from "./Command";
import { BaseNode } from "../../core-builder/schema/baseNode";

export class UpdateNodeCommand implements Command {
  constructor(
    private nodeId: string,
    private prev: BaseNode,
    private next: BaseNode
  ) {}

  execute(page: BaseNode): BaseNode {
    return this.replace(page, this.next);
  }

  undo(page: BaseNode): BaseNode {
    return this.replace(page, this.prev);
  }

  private replace(tree: BaseNode, node: BaseNode): BaseNode {
    if (tree.id === node.id) return node;

    return {
      ...tree,
      children: tree.children.map(c =>
        this.replace(c, node)
      )
    };
  }
}
