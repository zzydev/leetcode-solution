import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getLCFilename(title) {
  if (!title || typeof title !== 'string') {
    throw new Error('Invalid title input');
  }

  return `${title
    // Remove leading number and dot
    .replace(/^\d+\.\s*/, '')
    // Convert to camelCase
    .split(/\s+/)
    .map((word, i) =>
      i === 0
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join('')}.ts`;
}

async function generateFiles(baseDir, fileName) {
  const srcDir = path.join(__dirname, 'src/problems', baseDir);
  const testDir = path.join(srcDir, '__tests__');
  const srcFile = path.join(srcDir, fileName);
  const testFile = path.join(testDir, fileName.replace('.ts', '.spec.ts'));

  await Promise.all([
    fs.writeFile(srcFile, '', { flag: 'w', recursive: true }),
    fs.writeFile(testFile, '', { flag: 'w', recursive: true }),
  ]);
}

async function main() {
  try {
    const dir = process.argv[2];
    const leetCodeTitle = process.argv.slice(3);

    if (!leetCodeTitle) {
      process.exit(1);
    }
    const fileName = getLCFilename(leetCodeTitle.join(' '));
    await generateFiles(dir, fileName);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
