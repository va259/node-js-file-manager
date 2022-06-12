import { readdirSync } from 'node:fs';
import { errMsg } from '../../utils/constants.mjs';

export const list = async () => {
    const fileList = readdirSync('.');

    try {
      console.log(fileList) ;
    } catch (err) {
      console.log(errMsg());
    }
};
