
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
![Screenshot 2023-07-10 212630](https://github.com/shokerm/Customized-CLI-Commands/assets/96984377/dee53630-05a7-4da4-ba15-88e00f18f529)
![Screenshot 2023-07-10 212950del](https://github.com/shokerm/Customized-CLI-Commands/assets/96984377/ff43f01c-f659-436c-ac7a-da29a0043fab)
![Screenshot 2023-07-10 213027](https://github.com/shokerm/Customized-CLI-Commands/assets/96984377/84385da9-ab76-4dcf-9b3a-e47af7d8e5ac)



