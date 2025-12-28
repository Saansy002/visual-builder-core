import { useDroppable } from '@dnd-kit/core';
import { RenderNode } from '../core-builder/renderer/renderNode';
import { useEditorStore } from '../editor/useEditorStore';

export const Canvas = () => {
  const { page } = useEditorStore();
  const { setNodeRef } = useDroppable({ id: 'canvas' });

  return (
    <div
      ref={setNodeRef}
      style={{ minHeight: 300, border: '2px dashed #aaa', padding: 16 }}
    >
      {page.root.map(node => (
        <RenderNode key={node.id} node={node} />
      ))}
    </div>
  );
};
