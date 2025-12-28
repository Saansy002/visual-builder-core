import { PageSchema } from './page';

export const examplePage: PageSchema = {
  id: 'page-1',
  root: [
    {
      id: 'text-1',
      type: 'text',
      isContainer: false, // ✅ REQUIRED
      props: { content: 'Hello Builder 🚀' },
      styles: {
        desktop: {
          color: '#2563eb',
          fontSize: '50px',
        },
      },
    },
  ],
};
