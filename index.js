import { stdin as input, stdout as output } from 'node:process';
import { chdir, cwd  } from 'node:process';
import * as readline from 'node:readline';
import { handleInput } from './utils/handleInput.mjs';
import { valid } from './utils/validateInput.mjs';
import { handleNavCommand } from './commands/nav/navCommandsHandler.mjs';
import { handleFileCommand } from './commands/file/fileCommandsHandler.mjs';
import { handleMiscCommand } from './commands/misc/miscCommandsHandler.mjs';
import { greetMsg, leaveMsg, invalidMsg, currentDirMsg, userHomeDir } from './utils/constants.mjs';
import { navCommands, fileCommands, miscCommands, exitCommands } from './utils/constants.mjs'

const cli = readline.createInterface({ input, output, prompt: '> ' });
cli.write(chdir(userHomeDir));


export const start = async () => {
  cli.write(greetMsg);
  console.log(currentDirMsg + cwd() + '\n');
  cli.prompt();
  cli.on('line', (line) => {
    if (!valid(line)) {
      invalidMsg();
      console.log(currentDirMsg + cwd());
      cli.prompt();
      return;
    }

    const command = line.trim().split(' ').shift();
    const args = handleInput(line);

    if (navCommands.includes(command)) {
      handleNavCommand(command, args);
    }
    else if (fileCommands.includes(command)) {
      handleFileCommand(command, args);
    }
    else if (miscCommands.includes(command)) {
      handleMiscCommand(command, args);
    }
    else if (exitCommands.includes(command)) {
     cli.close();
    }
    else {
      console.log(invalidMsg);
    };
    
    console.log(currentDirMsg + cwd());
    cli.prompt();
  })
  .on('close', () => {
    console.log(leaveMsg);
    process.exit(0);
  });
}

start();
