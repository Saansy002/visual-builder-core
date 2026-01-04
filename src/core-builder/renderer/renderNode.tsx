import { BasesNode } from '../schema/basesNode';
import { Droppable } from '../../canvas/Droppable';
import { applyStyles } from '../style-engine/applyStyles';

export const RenderNode = ({ node }: { node: BasesNode }) => {
  const styleVars = applyStyles(node.styles);

  const content = (() => {
    switch (node.type) {
      case 'text':
        return (
          <p
            style={{
              ...styleVars,
              color: 'var(--vb-color-text)',
              fontSize: 'var(--vb-font-size-base)',
              fontFamily: 'var(--vb-font-family)',
            }}
          >
            force test
            {node.props?.content}
          </p>
        );

      case 'section':
        return (
          <section style={styleVars}>
            {node.children?.map(c => (
              <RenderNode key={c.id} node={c} />
            ))}
          </section>
        );

      case 'column':
        return (
          <div style={styleVars}>
            {node.children?.map(c => (
              <RenderNode key={c.id} node={c} />
            ))}
          </div>
        );

      default:
        return null;
    }
  })();

  return node.isContainer ? (
    <Droppable id={node.id}>{content}</Droppable>
  ) : (
    content
  );
};
