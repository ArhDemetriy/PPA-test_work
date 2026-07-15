import { defineConfig } from 'oxlint';

export default defineConfig({
  settings: {
    next: { rootDir: './app' },
  },
  plugins: ['nextjs', 'react', 'typescript', 'promise'],
  categories: {
    correctness: 'warn',
  },
  rules: {
    'eslint/no-unused-vars': 'error',
  },
});
