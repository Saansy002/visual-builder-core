import { BaseNode } from '../schema/baseNode';
import { useEditorStore } from "../../editor/useEditorStore";
import { resolveStyles } from "../style-engine/resolveStyles";
import { getWidget } from "../widgets/WidgetRegistry";


export const RenderNode = ({ node }: { node: BaseNode }) => {
  const selectNode = useEditorStore(s => s.selectNode);
  const selectedId = useEditorStore(s => s.selectedId);

  const breakpoint = useEditorStore(s => s.breakpoint);
  const style = resolveStyles(node.props.styles, breakpoint);

  const isSelected = selectedId === node.id;
  const wrapperStyle = {
    outline: isSelected ? "2px solid #5b9cff" : "none",
    cursor: "pointer"
  };

  switch (node.type) {
     case "widget":
      return (
        <div
          style={wrapperStyle}
          onClick={e => {
            e.stopPropagation();
            selectNode(node.id);
          }}
        >
          { /* widget render handled via registry */ }
        </div>
      );
    case "section":
    case "container":
      return (
        <div
          style={wrapperStyle}
          onClick={e => {
            e.stopPropagation();
            selectNode(node.id);
          }}
        >
          {/* children rendering */}
        </div>
      );

    default:
      const widget = getWidget(node.props.widgetType);
      if (!widget) return null;
      return (
        <div style={style}>
          {widget.render(node)}
        </div>
      );
  }

  
};

