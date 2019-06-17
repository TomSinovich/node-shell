const path = function() {
  process.stdout.write(process.cwd());
}
const prompt = process.stdout.write('\nprompt > ')

module.exports =  path;

// module.exports.prompt = prompt;
