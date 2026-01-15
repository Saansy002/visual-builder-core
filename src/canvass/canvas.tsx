import React from "react";
import { BaseNode } from "../core-builder/schema/baseNode";
import { applyStyles } from "../core-builder/style-engine/applyStyles";

export const RenderNode = ({ node }: { node: BaseNode }) => {
  const styleVars = applyStyles(node.props?.styles || {});

  switch (node.type) {
    case "text":
      return <div style={styleVars}>{node.props?.content}</div>;

    case "container":
      return (
        <div style={{ display: "flex", ...styleVars }}>
          {node.children?.map(child => (
            <RenderNode key={child.id} node={child} />
          ))}
        </div>
      );

    default:
      return null;
  }
};

const Canvas = ({ nodes }: { nodes: BaseNode[] }) => {
  return (
    <div className="canvas">
      {nodes.map(node => (
        <RenderNode key={node.id} node={node} />
      ))}
    </div>
  );
};

export default Canvas;
