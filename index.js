const fileManager = require('./service/file.service').fileManager;
const config = require('./config/template.config');
const rx = require('rx');

if (process.argv.length < 3)  {
  throw new Error('You must specifie a name');
}

const name = process.argv[2];

config.templatesConfig.forEach(template => {
  const source = template.templateFolder + template.templateFileName;
  const destination = template.outputFolder + name + template.outputSuffixFileName;
  const options = {
    files: destination,
    from: /NAME_VAR/g,
    to: name
  };

  fileManager.removeFile(destination)
    .flatMap(() => fileManager.copyFile(source, destination))
    .flatMap(() => fileManager.replaceInFile(options))
    .subscribe();
});

