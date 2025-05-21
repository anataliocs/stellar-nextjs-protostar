// plopfile.ts
import { NodePlopAPI } from 'plop';

import reactComponent from './reactComponent';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (plop: NodePlopAPI) {
  plop.setGenerator('init', {
    description: 'Run this first!  Create and initialize project skeleton',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'controller name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{name}}.js',
        templateFile: 'plop-templates/controller.hbs'
      }
    ]
  });

  plop.setGenerator('react component', reactComponent);

  plop.setHelper('upperCase', function (text: string): string {
    return text.toUpperCase();
  });
}
