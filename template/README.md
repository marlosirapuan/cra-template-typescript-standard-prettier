# cra-template-typescript-standard-prettier

TypeScript template for [Create React App](https://github.com/facebook/create-react-app) with standardjs (eslint), prettier, editorconfig, axios, react-router-dom, react-icons and styled-components.

Versions to this template:
```
typescript: ~3.9.7
@typescript-eslint/eslint-plugin: ^4.7.0
@typescript-eslint/parser: ^4.7.0
```

**IMPORTANT**

Due to an eslint config limitation **you have to install all dependencies** that this config uses manually with:

```sh
yarn setup

# or

npm run setup-npm
```

After that, you can run the default command to start:

```
yarn start
```

Tests with:

```
yarn test
```

Oh, if you want you can remove from `package.json` the script commands after run setup:
```
"setup": "...",
"setup-yarn": "...",
"setup-npm": "..."
```

## Folder structure

```bash
my-app
├── src/
│   ├── api/
│   │   └── index.ts
│   ├── compoments/
│   ├── pages/
│   │   ├── About/
│   │   │   └── About.tsx
│   │   │   └── styles.ts
│   │   ├── Home/
│   │   │   └── Home.tsx
│   │   │   └── styles.ts
│   │   └── Restrict/
│   │       └── Restrict.tsx
│   │       └── styles.ts
│   ├── routes/
│   │   ├── index.tsx
│   │   └── Route.tsx
│   ├── styles/
│   │   └── global.ts
│   ├── App.css
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── index.tsx
│   └── routes.js
├── .editorconfig
├── .editorignore
├── .eslintrc.json
├── .gitignore
├── prettier.config.js
├── README.md
└── tsconfig.json
```

You can remove `App.css` file. This file is generated automatically by cra.

This template is configured with an absolute path, so you can use it like this:

```typescript
import { Home, Page } from 'pages'
```

Instead:

```typescript
import { Home, Page } from '../pages'
```

## Editor integration

### VSCode

I recommend the best editor for JavaScript/TypeScript to use with this template: [Visual Studio Code](https://code.visualstudio.com/) (VSCode).

And these extensions to best integration (Prettier extension it's not necessary!):
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

Change your `settings.json` to fix all:

```
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
```
or specific:

```
  "[typescriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
```

That's it. Reload the window or restart your VSCode to load config.
