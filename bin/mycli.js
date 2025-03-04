#! /usr/bin/env node
const { program } = require("commander");

program
  .command("create <projectName> [other...]")
  .action((projectName, args) => {});
program.parse();
