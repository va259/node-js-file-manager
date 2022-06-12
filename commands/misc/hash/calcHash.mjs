import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

export const calcHash = async (filePath) => {
  const readable = createReadStream(filePath, 'utf8');
  const hash = createHash('sha256');
  hash.setEncoding('hex');

  readable
    .on('end', () => {
      hash.end();
      console.log(hash.read());
    })
    .on('error', () => {
      console.log(errMsg());
    })
    
  readable.pipe(hash);
}
