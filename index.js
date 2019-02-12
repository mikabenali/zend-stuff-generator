const fs = require('fs');
const replace = require('replace-in-file');

const TEXT_TO_REPLACE = 'NAME_VAR';

const options = {
  files: 'template/collection.template.php',
  from: '/' + TEXT_TO_REPLACE + '/g',
  to: 'Film'
};

try {
  replace(options);
} catch (error) {
  console.log('error', error);
}

