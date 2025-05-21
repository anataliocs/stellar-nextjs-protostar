# Protostar for Next JS 15+, Tailwind CSS 3 and TypeScript

[![Test application generation](https://github.com/anataliocs/stellar-nextjs-protostar/actions/workflows/main.yml/badge.svg)](https://github.com/anataliocs/stellar-nextjs-protostar/actions/workflows/main.yml)

[![Dependency Review](https://github.com/anataliocs/stellar-nextjs-protostar/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/anataliocs/stellar-nextjs-protostar/actions/workflows/dependency-review.yml)

[![Dependabot Updates](https://github.com/anataliocs/stellar-nextjs-protostar/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/anataliocs/stellar-nextjs-protostar/actions/workflows/dependabot/dependabot-updates)

[![CodeQL](https://github.com/anataliocs/stellar-nextjs-protostar/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/anataliocs/stellar-nextjs-protostar/actions/workflows/github-code-scanning/codeql)

**Protostar**

> BB star in the earliest stage of Stellar evolution
>
> Accumulating traction and vibes from the ecosystem
>
> Precursor stage before nuclear fusion (Product Market Fit) 🌟

🚀 Boilerplate Next.js, Tailwind, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, React Testing Library, PostCSS,
Storybook, Plop, GH actions

## Getting Started

```bash
pnpm create next-app -e https://github.com/anataliocs/stellar-nextjs-protostar
```

Then:

```bash
pnpm generate
```

## :rocket: Features

Developer experience first:

- [Next.js](https://nextjs.org) for Static Site Generator
- Type checking [TypeScript](https://www.typescriptlang.org)
- Integrate with [Tailwind CSS](https://tailwindcss.com)
- [Storybook](https://storybook.js.org) for components documentation
- Strict Mode for TypeScript and React 18
- Linter with [ESLint](https://eslint.org)
- Code Formatter with [Prettier](https://prettier.io)
- [Husky](https://typicode.github.io/husky/#/) for Git Hooks
    - Pre-commit hook to ensure clear commit msg
- [Lint-staged](https://github.com/okonet/lint-staged) for running linters on Git staged files
- Testing with [Jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/)
- Absolute Imports using `@` prefix
- Nextjs custom layouts
- [T3 env](https://env.t3.gg/) Manage your environment variables with ease
- Message convention for git
- Maximize lighthouse score
- GH actions
- Components generation with [Plop](https://plopjs.com/)
  and [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) convention

## 🧪 Testing

All tests are collocated with the source code inside the same directory. So, it makes it easier to find them. Coverage
threshold is set to `70%`. In the `.jest` folder there is a custom provider for the all tests.

## :information_source: How To Use

Run:

```bash
pnpm create next-app -e https://github.com/anataliocs/stellar-nextjs-protostar
```

## 🚀 Deploy to production

Install command on Vercel:

```
corepack use pnpm@`pnpm -v` && pnpm i
```

You can see the results locally in production mode with:

```shell
pnpm build
```

```shell
pnpm start
```

## :gear: Generating components

```bash
pnpm generate Button
```

Result (if you chose an atom component):

```
└── components
      └── atoms
        └── Button
          ├── component.ts
          ├── Button.stories.tsx
          ├── Button.test.tsx
          └── Button.tsx
```

## License

Licensed under the MIT License, Copyright © 2025

See [LICENSE](LICENSE) for more information
