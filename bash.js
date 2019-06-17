const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  // const string = data.toString().trim();
  process.stdout.write(`${cmd.split(' ')[0]} `)

  switch (cmd.split(' ')[0]) {
    case 'pwd':
      pwd();
      break;
    case 'ls':
      ls();
      break;
    case 'cat':
      cat(cmd.split(' ')[1]);
      break;
    default:
      process.stdout.write('Did not recognize command: ' + cmd);
  }
  process.stdout.write('\nprompt > ')
})
