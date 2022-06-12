import { cwd } from 'node:process';
import { homedir } from 'node:os';
import path from 'node:path'
import { parseArgs } from './parseArgs.mjs';

const allCommands = ['.exit', 'SIGNINT', 'up', 'cd', 'ls',
                    'cat', 'add', 'rn', 'cp', 'mv', 'rm',
                    'os', 'hash', 'compress', 'decompress'];
const navCommands = ['up', 'cd', 'ls'];
const fileCommands = ['cat', 'add', 'rn', 'cp', 'mv', 'rm'];
const miscCommands = ['os', 'hash', 'compress', 'decompress'];
const exitCommands = ['.exit', 'SIGNINT'];
const noArgsCommands = ['.exit', 'SIGNINT', 'up', 'ls'];
const oneArgCommands = ['cd', 'cat', 'add', 'rm', 'os', 'hash'];
const twoArgsCommands = ['rn', 'cp', 'mv', 'compress', 'decompress'];

const username = parseArgs();
const greetMsg = `Welcome to the File Manager, ${username}` + '\n';
const leaveMsg = `Thank you for using File Manager, ${username}` + '\n';
const currentDirMsg = 'You are currently in: ';
const invalidMsg = () => console.log('Invalid input');
const errMsg = () => console.log('Operation failed');
const promptMsg = 'You are currently in: ';
const baseDirName = path.basename(cwd());
const userHomeDir = homedir();

export { greetMsg, leaveMsg, currentDirMsg, invalidMsg, errMsg, promptMsg }
export { username, baseDirName, userHomeDir };
export { navCommands, fileCommands, miscCommands, exitCommands }
export { allCommands, noArgsCommands, oneArgCommands, twoArgsCommands }
