//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  ...tanstackConfig,
  {
    ignores: [
      'prettier.config.js',
      'eslint.config.js',
      'content-collections.ts',
      'neon-vite-plugin.ts',
      '.storybook/*',
      '.content-collections/*',
      '.netlify',
    ],
  },
]
