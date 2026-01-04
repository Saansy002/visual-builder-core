export {}; // 👈 forces module recognition (do not remove)

import { PageSchema } from '../core-builder/schema/page';

export function exportJSON(page: PageSchema): string {
  return JSON.stringify(page, null, 2);
}
