import { type BadgeProps } from '@stellar/design-system';

type BadgePropVariantsType = NonNullable<BadgeProps['variant']>;

type PromptTypes =
  | 'input'
  | 'number'
  | 'confirm'
  | 'list'
  | 'rawlist'
  | 'expand'
  | 'checkbox'
  | 'password'
  | 'editor';

export interface BadgeComponent {
  description: string;
  prompts: {
    type: NonNullable<PromptTypes>;
    name: keyof BadgeProps;
    message: string;
    choices: BadgePropVariantsType[];
  }[];
  actions: { type: string; path: string; templateFile: string }[];
}

const variants: BadgePropVariantsType[] = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'warning',
  'error'
];

const badgeComponent: BadgeComponent = {
  description: 'Creates a new badge component',
  prompts: [
    {
      type: 'list',
      name: 'variant',
      message: 'What variant of badge?',
      choices: variants
    }
  ],
  actions: [
    // index.ts
    {
      type: 'add',
      path: '../src/components/atoms/{{pascalCase variant}}/index.ts',
      templateFile: 'templates/badge/index.ts.hbs'
    },
    // component
    {
      type: 'add',
      path: '../src/components/atoms/{{pascalCase variant}}/{{pascalCase variant}}.tsx',
      templateFile: 'templates/badge/badge.tsx.hbs'
    },
    // storybook
    {
      type: 'add',
      path: '../src/components/atoms/{{pascalCase variant}}/{{pascalCase variant}}.stories.tsx',
      templateFile: 'templates/badge/stories.tsx.hbs'
    },
    // tests
    {
      type: 'add',
      path: '../src/components/atoms/{{pascalCase variant}}/{{pascalCase variant}}.test.tsx',
      templateFile: 'templates/badge/test.tsx.hbs'
    }
  ]
} as BadgeComponent;

export default badgeComponent;
