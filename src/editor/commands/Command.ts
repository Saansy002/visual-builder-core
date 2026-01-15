import { BaseNode } from "../../core-builder/schema/baseNode";

export interface Command {
  execute(state: BaseNode): BaseNode;
  undo(state: BaseNode): BaseNode;
}
