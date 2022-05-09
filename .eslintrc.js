module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    'next',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': 0,
<<<<<<< HEAD
    "react/jsx-filename-extension":["warn",{"extensions":[".tsx"]} ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "function-declaration",
      },
    ],
    'import/extensions': [
       'error', 
       'ignorePackages', 
       { 
         js: 'never', 
         jsx: 'never', 
         ts: 'never', 
         tsx: 'never', 
         json: 'never', 
        }, 
      ],
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
      "camelcase": ["error", {"properties": "never"}],
=======
    'import/extensions': 0,
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'always',
        children: 'never',
      },
    ],
    'react/jsx-fragments': 0,
    'react/function-component-definition': 1,
>>>>>>> a0fefe00c70b36134fe52982daef77adfe4b91ea
  },
  settings: {
    // "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
  //   "import/no-extraneous-dependencies": [
  //     "error", 
  //     {"devDependencies": 
  //     ["**/*.test.ts", "**/*.test.tsx"]
  //   }
  // ],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        // moduleDirectory: ['src/', 'node_modules'],
      },
    },
  },
};
