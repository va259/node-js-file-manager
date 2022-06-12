export const handleInput = (input) => {
  const args = input.trim().split(' ');
  
  if (args.length === 2) {    // 1 argument
    return args.slice(1).toString(); 
  }
  else if (args.length === 3) {   // 2 arguments
    return args.slice(1);
  }
};
