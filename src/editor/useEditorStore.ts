import { create } from "zustand";
import { BaseNode, NodeType } from "../core-builder/schema/baseNode";
import { resolveInsert } from "../core-builder/layout/resolveInsert";
import { Breakpoint } from "../core-builder/style-engine/breakpoints";
import { createHistory, applyCommand, undoCommand, redoCommand } from "./history/historyStore";


interface EditorState {
  page: BaseNode;
  selectedId: string | null;
  
  setPage: (page: BaseNode) => void;
  selectNode: (id: string | null) => void;
  addNode: (parentId: string, type: NodeType) => void;

  // stubs (needed by UI)
  updateNode: (id: string, updater: (n: BaseNode) => BaseNode) => void;
  deleteNode: (id: string) => void;
  duplicateNode: (id: string) => void;
  moveNode: (id: string, targetId: string) => void;
  breakpoint: Breakpoint;
  setBreakpoint: (bp: Breakpoint) => void;
  history: createHistory(),
}

export const useEditorStore = create<EditorState>((set, get) => ({
  page: {
    id: "page-root",
    type: "page",
    props: {},
    children: []
  },

  selectedId: null,

  setPage: page => set({ page }),
  selectNode: id => set({ selectedId: id }),
  breakpoint: "desktop",
setBreakpoint: bp => set({ breakpoint: bp }),

addNode: (parentId, type) => {
  const command = new AddNodeCommand(parentId, type);
  const { page, history } = applyCommand(
    get().page,
    get().history,
    command
  );
  set({ page, history });
},
  addNode: (parentId, incomingType) => {
    const insert = (node: BaseNode): BaseNode => {
      if (node.id === parentId) {
        return {
          ...node,
          children: [
            ...node.children,
            ...resolveInsert(node, incomingType)
          ]
        };
      }

      return {
        ...node,
        children: node.children.map(insert)
      };
    };

    set({ page: insert(get().page) });
  },

  updateNode: (id, updater) => {
  const prevNode = findNode(get().page, id);
  if (!prevNode) return;

  const nextNode = updater(prevNode);

  const command = new UpdateNodeCommand(
    id,
    prevNode,
    nextNode
  );

  const { page, history } = applyCommand(
    get().page,
    get().history,
    command
  );

  set({ page, history });
},
  deleteNode: () => {},
  duplicateNode: () => {},
  undo: () => {
  const result = undoCommand(get().page, get().history);
  set(result);
},

redo: () => {
  const result = redoCommand(get().page, get().history);
  set(result);
},
  moveNode: () => {}
}));