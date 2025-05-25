import antfu from '@antfu/eslint-config';

export default antfu({
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },

  ignores: ['node_modules', 'public', '**/*.d.ts', '.vscode', 'createLC.mjs'],

  rules: {
    'ts/no-explicit-any': 'off',
    'ts/ban-types': 'off',
  },

  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
  },
});
