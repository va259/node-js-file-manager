import { createReadStream, createWriteStream, rm } from 'node:fs';
import { exists } from '../../utils/fsUtils.mjs'
import { errMsg } from '../../utils/constants.mjs';

export const move = async (filePath, fileCopyPath) => {
  if (!exists(fileCopyPath)) errMsg();

  const readable = createReadStream(filePath, {encoding: 'utf8'});
  const writable = createWriteStream(fileCopyPath);

    readable.on('error', () => {
      errMsg();
    });

    writable.on('error', () => {
      errMsg();
      readable.destroy();
      writable.end();
    });

    writable.on('finish', (err) => {
      if (err) errMsg();

      rm(filePath, (err) => {
        if (err) errMsg();
      });

      console.log(`${filePath} was moved successfully`)
    });

    readable.pipe(writable);
};
