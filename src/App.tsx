import { DndContext } from '@dnd-kit/core';
import { v4 as uuid } from 'uuid';
import React, { useEffect } from 'react';
import { Sidebar } from './sidebar/Sidebar';
import { Canvas } from './canvas/Canvas';
import { useEditorStore } from './editor/useEditorStore';
import { BasesNode } from './core-builder/schema/basesNode';
import { TreeView } from './tree/TreeView';
import { SettingsPanel } from './settings/SettingsPanel';
import { GlobalStylesPanel } from './settings/GlobalStylesPanel';
import defaultTheme from './theme/default.theme.json';
import { loadTheme } from './theme/loadTheme';
import { HtmlExportButton } from './export/HtmlExportButton';

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

// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  if (!page.globalStyles) {
    setPage({
      ...page,
      globalStyles: loadTheme(defaultTheme),
    });
  }
}, []);



  return (
  <DndContext onDragEnd={handleDragEnd}>
    <div style={{ display: 'flex', gap: 16 }}>
      <Sidebar />
      <Canvas />
      <TreeView />
      <SettingsPanel />
      <GlobalStylesPanel />
      <HtmlExportButton />
    </div>
  </DndContext>
);
}
export default App;
