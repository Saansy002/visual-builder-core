import { getAllWidgets } from "../core-builder/widgets/WidgetRegistry";

export const Sidebar = () => {
  const widgets = getAllWidgets();

  return (
    <div className="vb-sidebar">
      {widgets.map(widget => (
        <div
          key={widget.type}
          draggable
          onDragStart={e => {
            e.dataTransfer.setData("node-type", "widget");
            e.dataTransfer.setData("widget-type", widget.type);
          }}
          className="vb-widget-item"
        >
          {widget.title}
        </div>
      ))}
    </div>
  );
};