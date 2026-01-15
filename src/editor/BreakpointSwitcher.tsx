import { useEditorStore } from "./useEditorStore";
import { BREAKPOINTS } from "../core-builder/style-engine/breakpoints";

export const BreakpointSwitcher = () => {
  const breakpoint = useEditorStore(s => s.breakpoint);
  const setBreakpoint = useEditorStore(s => s.setBreakpoint);

  return (
    <div className="vb-breakpoints">
      {BREAKPOINTS.map(bp => (
        <button
          key={bp}
          onClick={() => setBreakpoint(bp)}
          style={{
            fontWeight: breakpoint === bp ? "bold" : "normal"
          }}
        >
          {bp}
        </button>
      ))}
    </div>
  );
};
