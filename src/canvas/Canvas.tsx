import { useEditorStore } from '../editor/useEditorStore';
import { RenderNode } from '../core-builder/renderer/renderNode';
import { applyGlobalStyles } from '../core-builder/style-engine/applyGlobalStyles';

export const Canvas = () => {
  const { page } = useEditorStore();
  const globalVars = applyGlobalStyles(page.globalStyles);

  return (
    <div
      style={{
        minHeight: 300,
        padding: 16,
        ...globalVars,
      }}
    >
      {page.root.map(node => (
        <RenderNode key={node.id} node={node} />
      ))}
    </div>
  );
};
