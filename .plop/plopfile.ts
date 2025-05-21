import component from './settings/component';

interface ExportsParams {
  plop: {
    setHelper(description: string, arg1: (text: string) => string): string;

    setGenerator: (
      description: string,
      arg1: {
        description: string;
        prompts: (
          | { type: string; name: string; message: string; choices: string[] }
          | {
              type: string;
              name: string;
              message: string;
              choices?: undefined;
            }
        )[];
        actions: { type: string; path: string; templateFile: string }[];
      }
    ) => void;
  };
}

// Add here more generators
module.exports = function ({ plop }: ExportsParams) {
  plop.setGenerator('base', {
    description: 'Project skeleton',
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

  plop.setGenerator('component', component);

  plop.setHelper('upperCase', function (text: string): string {
    return text.toUpperCase();
  });
};
