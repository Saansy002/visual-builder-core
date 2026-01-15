import { BaseNode, NodeType } from "../schema/baseNode";
import { ALLOWED_CHILDREN } from "../schema/nodeRules";

const createNode = (type: NodeType): BaseNode => ({
  id: crypto.randomUUID(),
  type,
  props: {},
  children: []
});

const createWidget = (widgetType: string): BaseNode => ({
  id: crypto.randomUUID(),
  type: "widget",
  props: { widgetType },
  children: []
});

export function resolveInsert(
  parent: BaseNode,
  incomingType: NodeType
): BaseNode[] {
  const allowed = ALLOWED_CHILDREN[parent.type];

  if (allowed.includes(incomingType)) {
    return [createNode(incomingType)];
  }

  if (parent.type === "section" && incomingType === "widget") {
    return [
      {
        ...createNode("container"),
        props: { layout: "row" },
        children: [createNode("widget")]
      }
    ];
  }

  if (parent.type === "page" && incomingType === "widget") {
    return [
      {
        ...createNode("section"),
        children: [
          {
            ...createNode("container"),
            props: { layout: "row" },
            children: [createNode("widget")]
          }
        ]
      }
    ];
  }

  return [];
}
