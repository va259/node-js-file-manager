import { createReadStream } from 'node:fs';
import { exists } from '../../utils/fsUtils.mjs';
import { errMsg } from '../../utils/constants.mjs';

export const read = async (filePath) => {
  if (!exists(filePath)) {
    console.log(errMsg());
    return;
  } else {
    const readable = createReadStream(filePath, 'utf8');
    
    readable
      .on('data', (chunk) => {
        console.log(chunk);
      })
      .on('end', () => {
        console.log('end-of-file');
      })
      .on('error', () => {
        console.log(errMsg());
      })
  }
};
