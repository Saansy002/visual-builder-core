import { Command } from "./Command";
import { BaseNode } from "../../core-builder/schema/baseNode";

export class InsertTemplateCommand implements Command {
  constructor(
    private parentId: string,
    private templateNode: BaseNode
  ) {}

  execute(page: BaseNode): BaseNode {
    const insert = (node: BaseNode): BaseNode => {
      if (node.id === this.parentId) {
        return {
          ...node,
          children: [...node.children, this.templateNode]
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
