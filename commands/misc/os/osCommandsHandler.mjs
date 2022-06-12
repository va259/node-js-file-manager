import { eolInfo, cpusInfo, homedirInfo, usernameInfo, archInfo } from './osCommands.mjs'
import { invalidMsg } from "../../../utils/constants.mjs";

export const handleOsCommand = (input) => {
  switch (input.slice(2)) {
    case 'EOL':
      eolInfo();
      break;
    case 'cpus':
      cpusInfo();
      break;
    case 'homedir':
      homedirInfo();
      break;
    case 'username':
      usernameInfo();
      break;
    case 'architecture':
      archInfo();
      break;
    default:
      invalidMsg();
      break;
  };
}
