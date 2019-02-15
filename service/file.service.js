const fs = require('fs');
const replace = require('replace-in-file');
const rx = require('rx');
const mkdirp = require('mkdirp');

exports.fileManager = {

  replaceInFile (options) {
    return rx.Observable.create(observer => {
      try {
        const changes = replace.sync(options);
        console.info('... ', changes.join(', '));
        observer.onNext(true);
      } catch (error) {
        observer.onError(error);
      }
    });
  },

  copyFile (source, destination) {
    return rx.Observable.create(observer => {
      fs.copyFile(source, destination, (error) => {
        if (error) {
          observer.onError(error);
        }
        observer.onNext(true);
      })
    });
  },

  removeFile (destination) {
    return rx.Observable.create(observer => {
      if (fs.existsSync(destination)) {
        fs.unlink(destination, (error) => {
          if (error) {
            observer.onError(error);
          }
        })
      }

      observer.onNext(true);
    });
  }
};