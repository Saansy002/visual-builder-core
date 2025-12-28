import { useEditorStore } from '../editor/useEditorStore';
import { BasesNode } from '../core-builder/schema/basesNode';

export const PropsEditor = ({ node }: { node: BasesNode }) => {
  const { updateNode } = useEditorStore();

  if (!node.props) return null;

  return (
    <>
      <h5>Content</h5>
      {Object.entries(node.props).map(([key, value]) => (
        <input
          key={key}
          value={value as string}
          style={{ width: '100%', marginBottom: 6 }}
          onChange={e =>
            updateNode(node.id, n => ({
              ...n,
              props: { ...n.props, [key]: e.target.value },
            }))
          }
        />
      ))}
    </>
  );
};
