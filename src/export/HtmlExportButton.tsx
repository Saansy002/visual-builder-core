import { useEditorStore } from '../editor/useEditorStore';
import { exportPageHTML } from './exportPageHTML';
import { exportCSS } from './exportCSS';
import { exportJSON } from './exportJSON';

export function HtmlExportButton() {
  const { page } = useEditorStore();

  const handleExport = () => {
    const html = exportPageHTML(page);
    const css = exportCSS(page);
    const json = exportJSON(page);

    const htmlBlob = new Blob([html], { type: 'text/html' });
    const cssBlob = new Blob([css], { type: 'text/css' });

    const htmlUrl = URL.createObjectURL(htmlBlob);
    const cssUrl = URL.createObjectURL(cssBlob);

    const jsonBlob = new Blob([json], { type: 'application/json' });
    const jsonUrl = URL.createObjectURL(jsonBlob);

    const a1 = document.createElement('a');
    a1.href = htmlUrl;
    a1.download = 'page.html';
    a1.click();

    const a2 = document.createElement('a');
    a2.href = cssUrl;
    a2.download = 'styles.css';
    a2.click();

    const a3 = document.createElement('a');
    a3.href = jsonUrl;
    a3.download = 'page.json';
    a3.click();

    URL.revokeObjectURL(htmlUrl);
    URL.revokeObjectURL(cssUrl);
    URL.revokeObjectURL(jsonUrl);
  };

  return <button onClick={handleExport}>Export HTML</button>;
}
