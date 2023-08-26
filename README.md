# Ian's TypeScript Browser Project Scaffold

This is a scaffold for a TypeScript web browser project for evergreen browsers using ESM. It features buildless debugging with [Modern Web's Web Dev Server](https://modern-web.dev/docs/dev-server/overview/) and buildless testing with [Modern Web's Web Test Runner](https://modern-web.dev/docs/test-runner/overview/). All files for the website, not just TypeScript files, are placed in `src/`, debugged and tested in place, and then only in the build phase are copied over to `dist/` along with transpiled TypeScript. Unit tests are also placed in `src/`, alongside the files they test, each named `name-of-file-tested.test.ts` or -`.js`.

## Included Tooling

- **Formatting:** [Prettier](https://prettier.io/)
  - `npm run format`: Formats all files.
  - `npm run format:watch`: Watches new and changed files in `src/` for formatting problems.
- **Linting:** [ESLint](https://eslint.org/)
  - `npm run lint`: Checks all files for code problems and formatting.
  - `npm run lint:fix`: Fixes code problems and formatting.
  - `npm run lint:watch`: Watches new and changed files in `src/` for formatting problems.
- **Typechecking:** [TypeScript compiler](https://www.typescriptlang.org/docs/handbook/compiler-options.html).
  - `npm run typecheck`: Checks for TypeScript type and other compile-tome errors.
  - `npm run typecheck:watch`: Watches new and changed files in `src/` for type and other compile-time errors.
- **Debugging:** [Modern Web's Web Dev Server](https://modern-web.dev/docs/dev-server/overview/)
  - `npm start`: Starts the dev server.
  - `npm stop`: Stops the dev server.
  - [Visual Studio Code](https://code.visualstudio.com/) launch configurations for Edge DevTools (including headless), Firefox (including headless), and Chrome.
- **Testing:** [Modern Web's Web Test Runner](https://modern-web.dev/docs/test-runner/overview/), using [Playwright](https://playwright.dev/) to test on Chromium, Firefox, and Webkit. Tests are written using [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).
  - `npm test`: Run all tests and generate a coverage report.
  - `npm test:watch`: Unit-tests files in `src/` when they are added or changed.
- **Building:** [esbuild](https://esbuild.github.io/)
  - `npm run clean`: Deletes everything in `dist/`.
  - `npm run build`: Builds the site, including compiling, minifying, and rolling up TypeScript and JavaScript, and places it in `dist/`.
- **Other:**
  - `npm run watch`: Watches files in `src/` for formatting, code problems, types and compilation-time errors, and unit-testing, all at the same time.

## Setup

Assuming you already have Node, git, and Visual Studio Code set up:

1. See [Creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) on [GitHub Docs](https://docs.github.com/).

1. On your local computer, navigate to the containing folder and clone your new repository using `git clone -- https://github.com/user-name/project local-project-dir`.

1. Run `npm install` to locally install all the node development dependencies.

1. In `package.json`, update the `"name"`, `"version"`, `"descriptions"`, `"auther"`, and `"license"` keys for the new project.

1. Replace `README.md` and update or delete `LICENSE`.

1. Edit `src/index.html` to update the title element with your project's name.

1. Commit the changes using `` git add . && git commit -m "Customized \`package.json\`, \`README.md\`, \`LICENSE\` & \`src/index.html\`."  ``.

1. Push the commit using `git push`.

## Copyright and License

Copyright 2023 Ian A. Boggs. Permissions agranted per the MIT No Attribution License.
