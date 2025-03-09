const fs = require('fs');

function getRandomNodeJSCode() {
  const filePath = './math-problems';
  const files = fs.readdirSync(filePath);
  const randomFile = files[Math.floor(Math.random() * files.length)];
  return `const ${randomFile} = require('${filePath}/${randomFile}');`;
}
