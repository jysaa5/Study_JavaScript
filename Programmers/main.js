
const fs = require('fs');
const path = require('path');

const target = process.argv[2];

if (!target) {
  const candidates = fs
    .readdirSync(__dirname)
    .filter((file) => file.endsWith('.js') && file !== path.basename(__filename));

  console.error('Usage: node main.js <file-name|file-name.js>');
  if (candidates.length) {
    console.error(`Example: node main.js ${candidates[0].replace('.js', '')}`);
    console.error(`Available files: ${candidates.join(', ')}`);
  }
  process.exit(1);
}

const targetFile = target.endsWith('.js') ? target : `${target}.js`;
const targetPath = path.join(__dirname, targetFile);

if (!fs.existsSync(targetPath)) {
  console.error(`Target file not found: ${targetFile}`);
  process.exit(1);
}

console.log(`Running ${targetFile}...\n`);

try {
  require(targetPath);
} catch (error) {
  console.error(`Error while running ${targetFile}: ${error.message}`);
  process.exit(1);
}
