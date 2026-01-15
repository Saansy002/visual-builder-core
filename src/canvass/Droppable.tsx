import { useEditorStore } from "../editor/useEditorStore";

export function Droppable({ nodeId, children }: any) {
  const addNode = useEditorStore(state => state.addNode);

  return (
    <div
      onDragOver={e => e.preventDefault()}
      onDrop={e => {
        const type = e.dataTransfer.getData("node-type");
        addNode(nodeId, type as any);
      }}
    >
      {children}
    </div>
  );
}
