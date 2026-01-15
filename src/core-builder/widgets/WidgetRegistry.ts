import { BaseNode } from "../schema/baseNode";
import React, { JSX } from 'react';


export interface WidgetDefinition {
  type: string;
  title: string;
  icon?: string;
  category: string;

  defaultProps: Record<string, any>;

  render: (node: BaseNode) => JSX.Element;
}

const registry: Record<string, WidgetDefinition> = {};

export const registerWidget = (widget: WidgetDefinition) => {
  registry[widget.type] = widget;
};

export const getWidget = (type: string): WidgetDefinition | undefined =>
  registry[type];

export const getAllWidgets = () =>
  Object.values(registry);
