import { useEffect } from "react";
import { useEditorStore } from "./useEditorStore";

export function useKeyboardShortcuts() {
  const undo = useEditorStore(s => s.undo);
  const redo = useEditorStore(s => s.redo);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "z") {
        e.preventDefault();
        undo();
      }
      if (e.ctrlKey && e.key === "y") {
        e.preventDefault();
        redo();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [undo, redo]);
}
