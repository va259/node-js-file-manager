import { createReadStream, createWriteStream } from 'node:fs';
import { exists } from '../../utils/fsUtils.mjs'
import { errMsg } from '../../utils/constants.mjs';

export const copy = async (filePath, fileCopyPath) => {
  if (!exists(fileCopyPath)) {;
    const readable = createReadStream(filePath);
    const writable = createWriteStream(fileCopyPath);

      readable.on('error', (err) => {
        errMsg();
        return
      });

      writable.on('error', (err) => {
        errMsg();
        readable.destroy();
        writable.end();
        return;
      });

      writable.on('finish', () => {
        console.log(`${filePath} was copied successfully`)
      });

      readable.pipe(writable);
    }
  };
