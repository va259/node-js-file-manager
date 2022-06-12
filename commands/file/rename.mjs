import fs from 'node:fs';
import { exists } from '../../utils/fsUtils.mjs'
import { errMsg } from '../../utils/constants.mjs';

export const rename = async (srcFileName, destFileName) => {
  if (exists(destFileName)) {
    console.log(errMsg());
    return;
  } else {
    fs.rename(srcFileName, destFileName, (err) => {
      if (err) { console.log(errMsg()) }
      else { console.log('File was renamed') };
    });
  }
};
