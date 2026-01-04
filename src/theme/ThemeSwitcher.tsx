import defaultTheme from './default.theme.json';
import { loadTheme } from './loadTheme';
import { useEditorStore } from '../editor/useEditorStore';

export const ThemeSwitcher = () => {
  const { page, setPage } = useEditorStore();

  return (
    <button
      onClick={() =>
        setPage({
          ...page,
          globalStyles: loadTheme(defaultTheme),
        })
      }
    >
      Apply Default Theme
    </button>
  );
};
