import { registerWidget } from "./WidgetRegistry";
import { BaseNode } from "../schema/baseNode";

registerWidget({
  type: "text",
  title: "Text",
  category: "Basic",
  defaultProps: {
    content: "Hello Builder 🚀"
  },

  render: (node: BaseNode) => (
    <p>{node.props.content}</p>
  )
});
