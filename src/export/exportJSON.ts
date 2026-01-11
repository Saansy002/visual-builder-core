import { PageSchema } from '../core-builder/schema/page';

export {}; // 👈 still needed for isolatedModules

export function exportJSON(page: PageSchema): string {
  return JSON.stringify(page, null, 2);
}
