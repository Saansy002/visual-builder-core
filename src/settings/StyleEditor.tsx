import { useEditorStore } from "../editor/useEditorStore";
import { BaseNode } from "../core-builder/schema/baseNode";

export const StyleEditor = ({ node }: { node: BaseNode }) => {
  const updateNode = useEditorStore(s => s.updateNode);
  const breakpoint = useEditorStore(s => s.breakpoint);

  const styles = node.props.styles || {};
  const current = styles[breakpoint] || {};

  return (
    <div>
      <h4>Style ({breakpoint})</h4>

      <input
        placeholder="Color"
        value={current.color || ""}
        onChange={e =>
          updateNode(node.id, n => ({
            ...n,
            props: {
              ...n.props,
              styles: {
                ...styles,
                [breakpoint]: {
                  ...current,
                  color: e.target.value
                }
              }
            }
          }))
        }
      />

      <input
        placeholder="Font Size"
        value={current.fontSize || ""}
        onChange={e =>
          updateNode(node.id, n => ({
            ...n,
            props: {
              ...n.props,
              styles: {
                ...styles,
                [breakpoint]: {
                  ...current,
                  fontSize: e.target.value
                }
              }
            }
          }))
        }
      />
    </div>
  );
};
