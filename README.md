# Protostar: Stellar React Component Code Generator

Next JS 15+, Tailwind CSS 3 and TypeScript

[![Test application generation](https://github.com/anataliocs/stellar-nextjs-protostar/actions/workflows/main.yml/badge.svg)](https://github.com/anataliocs/stellar-nextjs-protostar/actions/workflows/main.yml)
[![Dependency Review](https://github.com/anataliocs/stellar-nextjs-protostar/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/anataliocs/stellar-nextjs-protostar/actions/workflows/dependency-review.yml)
[![Dependabot Updates](https://github.com/anataliocs/stellar-nextjs-protostar/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/anataliocs/stellar-nextjs-protostar/actions/workflows/dependabot/dependabot-updates)
[![CodeQL](https://github.com/anataliocs/stellar-nextjs-protostar/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/anataliocs/stellar-nextjs-protostar/actions/workflows/github-code-scanning/codeql)
[![Sonar Qube](https://github.com/anataliocs/stellar-nextjs-protostar/actions/workflows/sonarqube.yml/badge.svg)](https://github.com/anataliocs/stellar-nextjs-protostar/actions/workflows/sonarqube.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=anataliocs_stellar-nextjs-protostar&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=anataliocs_stellar-nextjs-protostar)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=anataliocs_stellar-nextjs-protostar&metric=bugs)](https://sonarcloud.io/summary/new_code?id=anataliocs_stellar-nextjs-protostar)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=anataliocs_stellar-nextjs-protostar&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=anataliocs_stellar-nextjs-protostar)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=anataliocs_stellar-nextjs-protostar&metric=coverage)](https://sonarcloud.io/summary/new_code?id=anataliocs_stellar-nextjs-protostar)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=anataliocs_stellar-nextjs-protostar&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=anataliocs_stellar-nextjs-protostar)
[![codecov](https://codecov.io/gh/anataliocs/stellar-nextjs-protostar/graph/badge.svg?token=XWEIY794TB)](https://codecov.io/gh/anataliocs/stellar-nextjs-protostar)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fanataliocs%2Fstellar-nextjs-protostar.svg?type=shield&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2Fanataliocs%2Fstellar-nextjs-protostar?ref=badge_shield&issueType=license)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fanataliocs%2Fstellar-nextjs-protostar.svg?type=shield&issueType=security)](https://app.fossa.com/projects/git%2Bgithub.com%2Fanataliocs%2Fstellar-nextjs-protostar?ref=badge_shield&issueType=security)

<div align="center"> 
<a href="https://sonarcloud.io/summary/new_code?id=anataliocs_stellar-nextjs-protostar">
  <img src="https://sonarcloud.io/images/project_badges/sonarcloud-dark.svg" alt="SonarQube Cloud" width="20%" />
</a>
</div>

<div align="center"> 
<a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fanataliocs%2Fstellar-nextjs-protostar?ref=badge_small" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fanataliocs%2Fstellar-nextjs-protostar.svg?type=small"/></a>
</div>

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
