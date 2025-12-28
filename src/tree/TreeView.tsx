import { useEditorStore } from '../editor/useEditorStore';
import { BasesNode } from '../core-builder/schema/basesNode';

const TreeItem = ({ node, level = 0 }: { node: BasesNode; level?: number }) => {
  const { selectedId, selectNode } = useEditorStore();

  return (
    <div style={{ marginLeft: level * 12 }}>
      <div
        onClick={() => selectNode(node.id)}
        style={{
          cursor: 'pointer',
          padding: '2px 4px',
          background: selectedId === node.id ? '#e0e7ff' : 'transparent',
        }}
      >
        {node.type}
      </div>

      {node.children?.map(child => (
        <TreeItem key={child.id} node={child} level={level + 1} />
      ))}
    </div>
  );
};

export const TreeView = () => {
  const { page } = useEditorStore();

  return (
    <div style={{ width: 200 }}>
      <h4>Structure</h4>
      {page.root.map(node => (
        <TreeItem key={node.id} node={node} />
      ))}
    </div>
  );
};
