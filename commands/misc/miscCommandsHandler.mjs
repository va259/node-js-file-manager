import { handleOsCommand } from './os/osCommandsHandler.mjs';
import { compress} from './zip/compress.mjs'
import { decompress} from './zip/decompress.mjs'
import { invalidMsg } from '../../utils/constants.mjs'
import { calcHash } from './hash/calcHash.mjs';

export const handleMiscCommand = (command, args) => {
  switch (command) {
    case 'os':
      handleOsCommand(args);
      break;
    case 'hash':
      calcHash(args);
      break;
    case 'compress':
      compress(args[0], args[1]);
      break;
    case 'decompress':
      decompress(args[0], args[1]);
      break;
    default:
      invalidMsg();
      return;
    }
}
