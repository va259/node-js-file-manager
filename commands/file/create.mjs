import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { cwd } from 'node:process';
import { exists } from '../../utils/fsUtils.mjs'
import { errMsg } from '../../utils/constants.mjs';

export const create = async (fileName) => {
  const filePath = path.join(cwd(), fileName);

  if (exists(fileName)) {
    console.log(errMsg);
    return;
  } else {
    const writable = createWriteStream(filePath);    
      writable.write('');
      writable.end();
      writable.on('finish', () => {
        console.log(`${fileName} was created`);
    })
  }
};
