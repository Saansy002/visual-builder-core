import { useEditorStore } from '../editor/useEditorStore';

export const GlobalStylesPanel = () => {
  const { page, setPage } = useEditorStore();
  const styles = page.globalStyles || {};

  const update = (key: string, value: string) => {
    setPage({
      ...page,
      globalStyles: {
        ...styles,
        [key]: value,
      },
    });
  };

  return (
    <div style={{ width: 220 }}>
      <h4>Global Styles</h4>

      <input
        placeholder="Text Color"
        value={styles.colorText || ''}
        onChange={e => update('colorText', e.target.value)}
      />

      <input
        placeholder="Primary Color"
        value={styles.colorPrimary || ''}
        onChange={e => update('colorPrimary', e.target.value)}
      />

      <input
        placeholder="Font Family"
        value={styles.fontFamily || ''}
        onChange={e => update('fontFamily', e.target.value)}
      />

      <input
        placeholder="Base Font Size"
        value={styles.fontSizeBase || ''}
        onChange={e => update('fontSizeBase', e.target.value)}
      />
    </div>
  );
};
