import { PageSchema } from "../../core-builder/schema/page";

export interface Command {
  execute(state: PageSchema): PageSchema;
  undo(state: PageSchema): PageSchema;
}
