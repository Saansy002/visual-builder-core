import { create } from 'zustand';
import { PageSchema } from '../core-builder/schema/page';
import { BasesNode } from '../core-builder/schema/basesNode';

interface EditorState {
  page: PageSchema;
  selectedId?: string;
  setPage: (page: PageSchema) => void;
  selectNode: (id?: string) => void;
  updateNode: (id: string, updater: (node: BasesNode) => BasesNode) => void;
  deleteNode: (id: string) => void;
  duplicateNode: (id: string) => void;
  moveNode: (id: string, direction: 'up' | 'down') => void;
}

export const useEditorStore = create<EditorState>(set => ({
  page: { id: 'page-1', root: [] },
  selectedId: undefined,

  setPage: page => set({ page }),
  selectNode: id => set({ selectedId: id }),

  updateNode: (id, updater) =>
    set(state => {
      const updateRecursive = (nodes: BasesNode[]): BasesNode[] =>
        nodes.map(node => {
          if (node.id === id) return updater(node);
          if (node.children) {
            return { ...node, children: updateRecursive(node.children) };
          }
          return node;
        });
  

      return {
        page: {
          ...state.page,
          root: updateRecursive(state.page.root),
        },
      };
    }),

    deleteNode: id =>
  set(state => {
    const remove = (nodes: BasesNode[]): BasesNode[] =>
      nodes
        .filter(n => n.id !== id)
        .map(n =>
          n.children
            ? { ...n, children: remove(n.children) }
            : n
        );

    return {
      page: {
        ...state.page,
        root: remove(state.page.root),
      },
      selectedId: undefined,
    };
  }),

duplicateNode: id =>
  set(state => {
    const clone = (node: BasesNode): BasesNode => ({
      ...node,
      id: crypto.randomUUID(),
      children: node.children?.map(clone),
    });

    const duplicate = (nodes: BasesNode[]): BasesNode[] =>
      nodes.flatMap(n =>
        n.id === id ? [n, clone(n)] : [
          {
            ...n,
            children: n.children ? duplicate(n.children) : undefined,
          },
        ]
      );

    return {
      page: {
        ...state.page,
        root: duplicate(state.page.root),
      },
    };
  }),

moveNode: (id, direction) =>
  set(state => {
    const move = (nodes: BasesNode[]): BasesNode[] => {
      const idx = nodes.findIndex(n => n.id === id);
      if (idx === -1) {
        return nodes.map(n =>
          n.children ? { ...n, children: move(n.children) } : n
        );
      }

      const target = direction === 'up' ? idx - 1 : idx + 1;
      if (target < 0 || target >= nodes.length) return nodes;

      const newNodes = [...nodes];
      [newNodes[idx], newNodes[target]] = [newNodes[target], newNodes[idx]];
      return newNodes;
    };

    return {
      page: {
        ...state.page,
        root: move(state.page.root),
      },
    };
  }),

}));
