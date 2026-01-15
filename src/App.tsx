import Canvas from "./canvas/Canvas";
import { Sidebar } from "./sidebar/Sidebar";
import { TreeView } from "./tree/TreeView";
import { Inspector } from "./settings/Inspector";
import { useEditorStore } from "./editor/useEditorStore";
import { useKeyboardShortcuts } from "./editor/useKeyboardShortcuts";

export default function App() {
  const undo = useEditorStore(s => s.undo);
  const redo = useEditorStore(s => s.redo);

  useKeyboardShortcuts();

  return (
    <div style={{ display: "flex", gap: 16 }}>
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>

      <Sidebar />
      <Canvas />
      <TreeView />
      <Inspector />
    </div>
  );
}
