const fs = require('fs');
const replace = require('replace-in-file');

const options = {
  files: 'template/collection.template.php',
  from: 'NAME_VAR',
  to: 'Film'
};

try {
  replace(options);
} catch (error) {
  console.log('error', error);
}

