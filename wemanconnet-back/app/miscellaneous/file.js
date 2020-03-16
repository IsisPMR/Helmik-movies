const fs = require('fs');

module.exports = { 
    readFile: (path, fileName) => {
        return new Promise ((resolve, reject) => {
            fs.readFile(path + fileName, 'utf8', (err, content) => {
                if (err) {
                    console.log(err);
                }
            resolve(JSON.parse(content));
            });
        });
    }
}