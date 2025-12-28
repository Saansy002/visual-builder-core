import { BasesNode } from '../schema/basesNode';
import { Droppable } from '../../canvas/Droppable';
import { useEditorStore } from '../../editor/useEditorStore';

export const RenderNode = ({ node }: { node: BasesNode }) => {
  const { selectedId, selectNode } = useEditorStore();
  const isSelected = selectedId === node.id;

  const content = (
    <div
      onClick={e => {
        e.stopPropagation();
        selectNode(node.id);
      }}
      style={{
        outline: isSelected ? '2px solid #2563eb' : 'none',
        padding: 4,
      }}
    >
      {/* existing switch logic */}
    </div>
  );

  return node.isContainer ? (
    <Droppable id={node.id}>{content}</Droppable>
  ) : (
    content
  );
};
