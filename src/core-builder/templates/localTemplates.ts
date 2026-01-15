import { Template } from "./templateTypes";

export const localTemplates: Template[] = [
  {
    id: "hero-1",
    name: "Hero Section",
    type: "section",
    schema: {
      type: "section",
      children: [
        {
          type: "container",
          props: { layout: "row" },
          children: [
            {
              type: "widget",
              props: {
                widgetType: "text",
                content: "Build faster 🚀"
              },
              children: []
            }
          ]
        }
      ]
    }
  }
];
