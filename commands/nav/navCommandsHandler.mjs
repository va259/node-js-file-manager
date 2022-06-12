import { chdir, cwd  } from 'node:process';
import { list } from '../file/list.mjs';
import { sep } from 'node:path';
import { errMsg, invalidMsg } from '../../utils/constants.mjs'

export const handleNavCommand = (command, arg) => {
  switch (command) {
    case 'up':
      chdir('..' + sep);
      break;
    case 'ls':
      list(cwd());
      break;
    case 'cd':
      try { chdir(cwd() + sep + arg); } catch { errMsg() };
      break;
    default:
      invalidMsg();
      return;
    }
}
