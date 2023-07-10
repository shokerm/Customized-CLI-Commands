#!/usr/bin/env node

const [, , ...args] = process.argv;

let dirs;
if (args.length > 0) {
  dirs = args;
} else {
  dirs = ["components", "directives", "servieces", "pipes", "guards", "modules"];
}

const fs = require('fs');
const errorColor = "\x1b[31m";
const successColor = "\x1b[32m";
const resetColor = "\x1b[0m";
try {
  for (let index = 0; index < dirs.length; index++) {
    if (!fs.existsSync(dirs[index])) {
      fs.mkdirSync(dirs[index]);
      console.log(successColor, `Success!${resetColor} directory '${dirs[index]}' has been created succesfully.`);

    } else {
      console.log(errorColor, `Error:${resetColor} directory '${dirs[index]}' already exists!`);
    }
  }

} catch (error) {
  console.log(error);
}

