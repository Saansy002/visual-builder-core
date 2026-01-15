import { useEditorStore } from "../editor/useEditorStore";
import { findNode } from "../core-builder/utils/findNode";
import { PropsEditor } from "./PropsEditor";
import { StyleEditor } from "./StyleEditor";

export const Inspector = () => {
  const page = useEditorStore(s => s.page);
  const selectedId = useEditorStore(s => s.selectedId);

  if (!selectedId) {
    return <div className="vb-inspector">No selection</div>;
  }

  const node = findNode(page, selectedId);
  if (!node) return null;

  return (
    <div className="vb-inspector">
      <PropsEditor node={node} />
      <StyleEditor node={node} />
    </div>
  );
};
