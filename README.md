# cra-template-typescript-standard-prettier

TypeScript template for [Create React App](https://github.com/facebook/create-react-app) with standardjs (eslint), prettier, editorconfig, axios, react-router-dom, react-icons and styled-components.

## How to use

Please attention with the steps below:

To use this template, add `--template typescript-standard-prettier` when creating a new app.

For example:

```sh
yarn create react-app my-app --template typescript-standard-prettier

# or

npx create-react-app my-app --template typescript-standard-prettier
```

**IMPORTANT**

Due to an eslint config limitation **you have to install all dependencies** that this config uses manually with:

```sh
yarn setup

# or

npm run setup-npm
```

To be clear, you need to run, by example:

```
yarn create react-app my-app --template typescript-standard-prettier
yarn setup
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
│   └── index.tsx
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

## Contributing

1. Fork it
2. Create a branch (`git checkout -b feat/new-feature`)
3. Add changes (`git add .`)
4. Commit (`git commit -m 'add some feature`)
5. Push (`git push origin feat/new-feature`)
6. Open a PR :D

## License

cra-template-typescript-standard-prettier is open source software [licensed as MIT](https://github.com/marlosirapuan/cra-template-typescript-standard-prettier/blob/master/LICENSE).
