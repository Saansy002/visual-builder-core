import { BaseNode } from '../core-builder/schema/baseNode';

export const exportNodeToHTML = (node: BaseNode): string => {
  switch (node.type) {
    case 'section':
      return `
<section>
${node.children?.map(exportNodeToHTML).join('') || ''}
</section>
`;

    case 'container':
      return `
<div class="vb-container">
${node.children?.map(exportNodeToHTML).join('') || ''}
</div>
`;

    case 'text':
      return `<p>${node.props?.content || ''}</p>`;

    default:
      return '';
  }
};
