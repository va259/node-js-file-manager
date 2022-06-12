import { existsSync } from 'node:fs';
import path from 'node:path'
import { fileURLToPath } from 'url';

const exists = (filePath) => {
  return existsSync(filePath);
};

const getPath = (url, filename) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, filename);
  return filePath
}

export { exists, getPath };

