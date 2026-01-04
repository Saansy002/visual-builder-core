import { BasesNode } from '../core-builder/schema/basesNode';

export const exportNodeToHTML = (node: BasesNode): string => {
  switch (node.type) {
    case 'section':
      return `
<section>
${node.children?.map(exportNodeToHTML).join('') || ''}
</section>
`;

    case 'column':
      return `
<div class="vb-column">
${node.children?.map(exportNodeToHTML).join('') || ''}
</div>
`;

    case 'text':
      return `<p>${node.props?.content || ''}</p>`;

    default:
      return '';
  }
};
