import { PageSchema } from '../core-builder/schema/page';
import { exportNodeToHTML } from './exportHTML';

export const exportPageHTML = (page: PageSchema): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Exported Page</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
${page.root.map(exportNodeToHTML).join('')}
</body>
</html>
`;
};
