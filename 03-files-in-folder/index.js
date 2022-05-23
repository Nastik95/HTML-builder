const { error } = require('console');
const fs = require('fs');
const path = require('path');


// example - txt - 128.369kb
// path.extname()

fs.readdir(path.join(__dirname, './secret-folder'), { withFileTypes: true }, (error, files) => {       
    
        if (error) 
     console.log(error);
    else {
        const filesArray = files.filter(fileName => fileName.isFile()).map(fileName => fileName.name);

        const filesExt = filesArray.map(el => path.extname(el)).map(el => el.slice(1));
        
        const fileFirstPart = filesArray.map(d => path.parse(d).name);

        const filesLink = filesArray.map(e => './secret-folder/' + e);
        
        const filesSize = filesLink.map((a) => {
            try {
              return fs.statSync(path.resolve(__dirname, a)).size;
            } catch (error) {
              console.log(error);
            }
          });
    

    console.log(fileFirstPart[0] + ' - ' + filesExt[0] + ' - ' + filesSize[0] + 'b')
    console.log(fileFirstPart[1] + ' - ' + filesExt[1] + ' - ' + filesSize[1] + 'b')
    console.log(fileFirstPart[2] + ' - ' + filesExt[2] + ' - ' + filesSize[2] + 'b')
    console.log(fileFirstPart[3] + ' - ' + filesExt[3] + ' - ' + filesSize[3] + 'b')
    }  
})