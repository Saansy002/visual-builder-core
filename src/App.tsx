import { DndContext } from '@dnd-kit/core';
import { v4 as uuid } from 'uuid';
import { Sidebar } from './sidebar/Sidebar';
import { Canvas } from './canvas/Canvas';
import { useEditorStore } from './editor/useEditorStore';
import { BasesNode } from './core-builder/schema/basesNode';
import { TreeView } from './tree/TreeView';
import { SettingsPanel } from './settings/SettingsPanel';

function App() {
  const { page, setPage } = useEditorStore();

  const handleDragEnd = (event: any) => {
  const { active, over } = event;
  if (!over || over.id !== 'canvas') return;

  const isContainer = active.data.current.isContainer;

  const newNode: BasesNode = {
    id: uuid(),
    type: active.data.current.type,
    isContainer,
    children: isContainer ? [] : undefined,
    props: isContainer ? {} : { content: 'New Text' },
  };

  setPage({
    ...page,
    root: [...page.root, newNode],
  });
};


  return (
  <DndContext onDragEnd={handleDragEnd}>
    <div style={{ display: 'flex', gap: 16 }}>
      <Sidebar />
      <Canvas />
      <TreeView />
      <SettingsPanel />
    </div>
  </DndContext>
);
}
export default App;
