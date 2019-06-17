const path = function() {
  process.stdout.write(process.cwd());
}
const prompt = process.stdout.write('\nprompt > ')

module.exports =  function() {
  path();
};

module.exports.prompt = prompt;
