const fs = require('fs');

const cat = (fileName) => {
  let output = fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
    process.stdout.write('prompt > ');
  })
}

module.exports = cat;
