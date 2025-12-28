import { useDraggable } from '@dnd-kit/core';

const Item = ({ type, isContainer }: any) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: type,
    data: { type, isContainer },
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{ padding: 8, border: '1px solid #ccc', marginBottom: 4 }}
    >
      {type}
    </div>
  );
};

export const Sidebar = () => (
  <div style={{ width: 140 }}>
    <h4>Layout</h4>
    <Item type="section" isContainer />
    <Item type="column" isContainer />

    <h4>Widgets</h4>
    <Item type="text" isContainer={false} />
  </div>
);
