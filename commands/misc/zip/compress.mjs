import { createBrotliCompress } from 'node:zlib';
import { createWriteStream, createReadStream } from 'node:fs';
import { errMsg } from '../../../utils/constants.mjs';
import { exists } from '../../../utils/fsUtils.mjs'

export const compress = async (fileName, archName) => {
  if (!exists(fileName)) return errMsg();

  const readable = createReadStream(fileName);
  const writable = createWriteStream(archName);

  const brotli = createBrotliCompress();
  const stream = readable.pipe(brotli).pipe(writable);
  
  stream
    .on('finish', () => {
      console.log(`${archName} was successfully created`)
    })
    .on('error', () => {
      errMsg();
    });
  
};
