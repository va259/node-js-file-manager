import { EOL, cpus, userInfo } from "os";
import { arch } from 'node:process';

const eolInfo = () => console.log(JSON.stringify(EOL));

const cpusInfo = () => {
  console.log(`Number of CPUs: ${cpus().length}`)
  console.log(cpus().map(cpu => `${cpu.model}, clock rate: ${cpu.speed}`));
}
const homedirInfo = () => console.log(userInfo().homedir);

const usernameInfo = () => console.log(userInfo().username);

const archInfo = () => console.log(arch);

export { eolInfo, cpusInfo, homedirInfo, usernameInfo, archInfo }
