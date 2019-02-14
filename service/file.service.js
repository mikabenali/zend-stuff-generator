const fs = require('fs');
const replace = require('replace-in-file');
const Observable = require('rxjs').Observable;

exports.fileManager = {

  replaceInFile (options) {
    return Observable.create(observer => {
      try {
        const changes = replace.sync(options);
        console.info('... ', changes.join(', '));
        observer.next(true);
      } catch (error) {
        observer.error(error);
      }
    });
  },

  copyFile (source, destination) {
    return Observable.create(observer => {
      fs.copyFile(source, destination, (error) => {
        if (error) {
          observer.error(error);
        }
        observer.next(true);
      })
    });
  },

  removeFile (destination) {
    return Observable.create(observer => {
      if (fs.existsSync(destination)) {
        fs.unlink(destination, (error) => {
          if (error) {
            observer.error(error);
          }
        })
      }

      observer.next(true);
    });
  }
};