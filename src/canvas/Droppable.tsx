import { useDroppable } from '@dnd-kit/core';

export const Droppable = ({ id, children }: any) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        padding: 8,
        border: isOver ? '2px solid blue' : '1px dashed #ccc',
        marginBottom: 8,
      }}
    >
      {children}
    </div>
  );
};
