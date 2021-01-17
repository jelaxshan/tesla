# Tesla Homepage Clone


 
1. [Available scripts](#scripts)
2. [Technology stack](#technology)
3. [Useful information](#information)

<a name="scripts" />

### Available scripts

`npm start` - run development server with hot reload mode,

`npm build` - build distributon package,

`npm run lint` - run lints,

`npm run lint:code` - run lint for typescript / javascript files,

`npm run lint:style` - run lint for style files,

`npm test` - run tests,

`npm run test:watch` - run tests with watch mode,

`npm run test:coverage` - run tests and generate coverage report.

<a name="technology" />

### Technology stack

- [React with Hooks](https://pl.reactjs.org/)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [Styled-components](https://styled-components.com/)
- [Webpack](https://webpack.js.org/)
- [Husky](https://github.com/typicode/husky)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

<a name="information" />

### Useful information

I focused on separate logic from presentation layer of component, so components are created according to this scheme:
- **index.tsx** - main file with component declaration. You can put here a React Hooks features (eg.: useState, useEffects etc.), prepare component props, do some base logic etc. This file should return component view layer with component props set.
- **Component.tsx** - file with view layer of component.
- **Component.styled.tsx** - file with component style declaration.
- **handlers.ts** - file where You can place useful function for component.

Before you commit or push something on repository, Husky will run code lints and tests.
