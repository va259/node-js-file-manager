import { allCommands, noArgsCommands, oneArgCommands, twoArgsCommands } from './constants.mjs'

export const valid = (line) => {
  if (line) {
    const command = line.trim().split(' ')[0];
    const args = line.trim().split(' ').slice(1);

    if (!allCommands.includes(command)) {
      return false;
    }
    else if (noArgsCommands.includes(command) && (args.length !== 0)) {
      return false;
    }
    else if (oneArgCommands.includes(command) && (args.length !== 1)) {
      return false;
    }
    else if (twoArgsCommands.includes(command) && (args.length !== 2)) {
      return false;
    }
    else {
      return true;
    }
  }
}
