const fs = require('fs');

fs.writeFile('test.php', 'test', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('File created');
});

