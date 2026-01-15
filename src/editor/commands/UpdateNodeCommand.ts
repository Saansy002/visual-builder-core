import { Command } from "./Command";
import { BaseNode } from "../../core-builder/schema/baseNode";
import { PageSchema } from "../../core-builder/schema/page";

export class UpdateNodeCommand implements Command {
  constructor(
    private nodeId: string,
    private prev: BaseNode,
    private next: BaseNode
  ) {}

  execute(page: PageSchema): PageSchema {
    return {
      ...page,
      root: this.replace(page.root, this.next)
    };
  }

  undo(page: PageSchema): PageSchema {
    return {
      ...page,
      root: this.replace(page.root, this.prev)
    };
  }

  private replace(tree: BaseNode[], node: BaseNode): BaseNode[] {
    return tree.map(n => {
      if (n.id === node.id) return node;
      return {
        ...n,
        children: this.replace(n.children, node)
      };
    });
  }
}
