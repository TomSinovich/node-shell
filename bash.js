process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  switch (cmd) {
    case 'pwd':
      process.stdout.write(process.cwd())

      break;
    default:
      process.stdout.write('Did not recognize command: ' + cmd);
  }
  process.stdout.write('\nprompt > ')
})
