export const parseArgs = () => {
  const args = process.argv.slice(2).toString().trim();
  if (args.startsWith('--username')) return args.split('=').pop()
  else if (args.startsWith('--')) return args.slice(1)
};
