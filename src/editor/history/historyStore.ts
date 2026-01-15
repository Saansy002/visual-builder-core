import { Command } from "../commands/Command";
import { PageSchema } from "../../core-builder/schema/page";

export interface HistoryState {
  past: Command[];
  future: Command[];
}

export const createHistory = (): HistoryState => ({
  past: [],
  future: []
});

export function applyCommand(
  page: PageSchema,
  history: HistoryState,
  command: Command
) {
  const newPage = command.execute(page);

  return {
    page: newPage,
    history: {
      past: [...history.past, command],
      future: []
    }
  };
}

export function undoCommand(
  page: PageSchema,
  history: HistoryState
) {
  const command = history.past.at(-1);
  if (!command) return { page, history };

  const newPage = command.undo(page);

  return {
    page: newPage,
    history: {
      past: history.past.slice(0, -1),
      future: [command, ...history.future]
    }
  };
}

export function redoCommand(
  page: PageSchema,
  history: HistoryState
) {
  const command = history.future[0];
  if (!command) return { page, history };

  const newPage = command.execute(page);

  return {
    page: newPage,
    history: {
      past: [...history.past, command],
      future: history.future.slice(1)
    }
  };
}
