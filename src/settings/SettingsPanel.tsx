import { useEditorStore } from '../editor/useEditorStore';
import { BasesNode } from '../core-builder/schema/basesNode';
import { PropsEditor } from './PropsEditor';
import { StyleEditor } from './StyleEditor';

export const SettingsPanel = () => {
  const {
    page,
    selectedId,
    deleteNode,
    duplicateNode,
    moveNode,
  } = useEditorStore();

  const findNode = (nodes: BasesNode[]): BasesNode | undefined => {
    for (const node of nodes) {
      if (node.id === selectedId) return node;
      if (node.children) {
        const found = findNode(node.children);
        if (found) return found;
      }
    }
    return undefined;
  };

  const node = selectedId ? findNode(page.root) : undefined;

  if (!node) {
    return (
      <div style={{ width: 220 }}>
        <p>Select an element</p>
      </div>
    );
  }

  return (
    <div style={{ width: 220 }}>
      <h4>{node.type} Settings</h4>

      {/* 🔥 BUTTONS — MUST BE VISIBLE */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
        <button onClick={() => moveNode(node.id, 'up')}>↑</button>
        <button onClick={() => moveNode(node.id, 'down')}>↓</button>
        <button onClick={() => duplicateNode(node.id)}>Duplicate</button>
        <button onClick={() => deleteNode(node.id)}>Delete</button>
      </div>

      <PropsEditor node={node} />
      <StyleEditor node={node} />
    </div>
  );
};
