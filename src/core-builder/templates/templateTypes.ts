export type TemplateType = "page" | "section";

export interface Template {
  id: string;
  name: string;
  type: TemplateType;
  schema: any; // BaseNode
  thumbnail?: string;
}
