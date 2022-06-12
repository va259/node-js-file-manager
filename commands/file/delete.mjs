import { rm } from 'node:fs';
import { errMsg } from '../../utils/constants.mjs';
import { exists } from '../../utils/fsUtils.mjs';

export const remove = async (fileToRemove) => {
  if (!exists(fileToRemove)) {
    errMsg();
    return;
  }

  rm(fileToRemove, (err) => {
    if (err) {
      errMsg();
    } else {
      console.log(`${fileToRemove} was deleted`);
    }
  })
};
