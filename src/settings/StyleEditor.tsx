import { useEditorStore } from '../editor/useEditorStore';
import { BasesNode } from '../core-builder/schema/basesNode';

const STYLE_FIELDS = ['color', 'fontSize', 'margin', 'padding', 'background'];

export const StyleEditor = ({ node }: { node: BasesNode }) => {
  const { updateNode } = useEditorStore();
  const styles = node.styles?.desktop || {};

  return (
    <>
      <h5>Styles</h5>
      {STYLE_FIELDS.map(field => (
        <input
          key={field}
          placeholder={field}
          value={styles[field] || ''}
          style={{ width: '100%', marginBottom: 6 }}
          onChange={e =>
            updateNode(node.id, n => ({
              ...n,
              styles: {
                ...n.styles,
                desktop: {
                  ...n.styles?.desktop,
                  [field]: e.target.value,
                },
              },
            }))
          }
        />
      ))}
    </>
  );
};
