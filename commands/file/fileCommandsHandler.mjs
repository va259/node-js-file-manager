import { read } from './read.mjs';
import { create } from './create.mjs';
import { rename } from './rename.mjs';
import { copy } from './copy.mjs'
import { move } from './move.mjs'
import { remove } from './delete.mjs'
import { invalidMsg } from '../../utils/constants.mjs'

export const handleFileCommand = (command, args) => {
  switch (command) {
    case 'cat':
      read(args);
      break;
    case 'add':
      create(args);
      break;
    case 'rn':
      rename(args[0], args[1]);
      break;
    case 'cp':
      copy(args[0], args[1]);
      break;
    case 'mv':
      move(args[0], args[1]);
      break;
    case 'rm':
      remove(args);
      break;
    default:
      console.log(invalidMsg);
      return;
    }
}
