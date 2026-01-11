import { PageSchema } from '../core-builder/schema/page';
import { exportNodeToHTML } from './exportHTML';

export function exportPageHTML(page: PageSchema): string {
  return page.root.map(exportNodeToHTML).join('');
}
