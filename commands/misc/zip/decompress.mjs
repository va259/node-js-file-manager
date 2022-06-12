import { createBrotliDecompress } from 'node:zlib';
import { createWriteStream, createReadStream } from 'node:fs';
import { exists } from '../../../utils/fsUtils.mjs';
import { create } from '../../file/create.mjs'
import { errMsg } from '../../../utils/constants.mjs';

export const decompress = async (archName, fileName) => {
  if (!exists(fileName)) create(fileName);
  else if (!exists(archName)) return errMsg();
  
  const readable = createReadStream(archName);
  const writable = createWriteStream(fileName);

  const brotli = createBrotliDecompress();
  const stream = readable.pipe(brotli).pipe(writable);
  
  stream
    .on('finish', () => {
      console.log(`${archName} was successfully decompressed`)
    })
    .on('error', () => {
      errMsg();
    });
};
