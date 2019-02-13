const fs = require('fs');
const replace = require('replace-in-file');
import { templatesConfig } from './config/template.config';

if (process.argv.length < 3)  {
  throw new Error('You must specifie a name');
}

const name = process.argv[2];
const files = [
  {type: 'rest', templateFolder: 'template/rest/', outputFolder: 'output/rest/', templateName: 'collection.template.php', suffix: 'Collection'},
];

templatesConfig.forEach(template => {
  const source = template.templateFolder + template.templateFileName;
  const destination = template.outputFolder + name + template.outputSuffixFileName;

  fs.copyFile(source, destination, (err) => {
    if (err) throw err;

    const options = {
      files: destination,
      from: /NAME_VAR/g,
      to: 'lala'
    };

    try {
      const changes = replace.sync(options);
    } catch (error) {
      throw new Error(error);
    }
  });
});


