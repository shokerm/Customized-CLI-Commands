
# Customized-CLI-Commads
Simple code to create a customized CLI commands using nodeJS.
In this project the customized CLI commands used to create/delete six directories for example to use at an angular project: 
* components
* directives
* servieces
* pipes
* guards
* modules

## Table Of Content
- [Installation](#installation)

## Installation

Install with npm:

```bash
  npm init -y 
```
* At the file package.json add "bin" key with link to js script file e.g.
* The key in the been object would be our CLI command.

```bash
  "bin":{
    "cr-dirs": "./cli.js"
  }
```
* At the js script code create an instance of a shebang line:
```bash
#!/usr/bin/env node

```
* To enable our customized CLI command globaly use this command:
```bash
  npm install -g
```
