import { Command } from "./Command";
import { BaseNode } from "../../core-builder/schema/baseNode";
import { PageSchema } from "../../core-builder/schema/page";

export class InsertTemplateCommand implements Command {
  constructor(
    private parentId: string,
    private templateNode: BaseNode
  ) {}

  execute(page: PageSchema): PageSchema {
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

    return {
      ...page,
      root: page.root.map(insert)
    };
  }

  undo(page: PageSchema): PageSchema {
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

    return {
      ...page,
      root: page.root.map(remove)
    };
  }
}
