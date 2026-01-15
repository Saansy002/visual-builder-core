import { BaseNode } from "../core-builder/schema/baseNode";
import { useEditorStore } from "../editor/useEditorStore";

export const PropsEditor = ({ node }: { node: BaseNode }) => {
  const updateNode = useEditorStore(s => s.updateNode);

  if (!node.props) return null;

  return (
    <div>
      <h4>Content</h4>

      {Object.entries(node.props).map(([key, value]) => (
        <input
          key={key}
          value={value}
          onChange={e =>
            updateNode(node.id, n => ({
              ...n,
              props: {
                ...n.props,
                [key]: e.target.value
              }
            }))
          }
        />
      ))}
    </div>
  );
};
