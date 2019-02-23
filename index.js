const fileManager = require('./service/file.service').fileManager;
const config = require('./config/template.config');
const rx = require('rx');
const mkdirp = require('mkdirp');

let name = '';
let type = 'all';

process.argv.forEach((arg) => {
  const argExploded = arg.split('=');
  console.log('arg', argExploded);

  if (argExploded[0] === 'name') {
    name = argExploded[1];
  }

  if (argExploded[0] === 'type') {
    name = argExploded[1];
  }
});

if (! name.length)  {
  throw new Error('You must specifie a name');
}

const folderName = new Date().getTime() + '_' + name;

mkdirp('./output/' + folderName, function(error) {
  if (error) {
    throw new Error(error);
  }

  config.templatesConfig.forEach(template => {
    const source = template.templateFolder + template.templateFileName;
    const fileName = template.isSuffixFullName ? template.outputSuffixFileName : name + template.outputSuffixFileName;
    const destination = './output/' + folderName + template.outputFolder + fileName;
    const options = {
      files: destination,
      from: [/NAME_VAR/g, /NAME_LOWER_VAR/g],
      to: [name, name.toLowerCase()]
    };

    mkdirp.sync('./output/' + folderName + template.outputFolder);

    fileManager.removeFile(destination)
      .flatMap(() => fileManager.copyFile(source, destination))
      .flatMap(() => fileManager.replaceInFile(options))
      .subscribe();
  });
});


