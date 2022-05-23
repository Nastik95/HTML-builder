const { error } = require('console');
const fs = require('fs');
const path = require('path');


// example - txt - 128.369kb
// path.extname()

fs.readdir(path.join(__dirname, './secret-folder'), { withFileTypes: true }, (error, files) => {
  if (error) console.log(error);
  else {
    const filesArray = files.filter((fileName) => fileName.isFile()).map((fileName) => fileName.name);

    const filesExt = filesArray.map((el) => path.extname(el)).map((el) => el.slice(1));

    const fileFirstPart = filesArray.map((d) => path.parse(d).name);

    const filesLink = filesArray.map((e) => './secret-folder/' + e);

    filesLink.forEach((a, index) => {
      fs.stat(path.resolve(__dirname, a), (error, stats) => {
        if (error) {
          console.log(error);
        } else {
          formateResponse(filesExt[index], fileFirstPart[index], stats.size);
        }
      });
    });
  }
});

const formateResponse = (filesExt, fileFirstPart, filesSize) => {
  console.log(fileFirstPart + ' - ' + filesExt + ' - ' + filesSize + 'b');
};