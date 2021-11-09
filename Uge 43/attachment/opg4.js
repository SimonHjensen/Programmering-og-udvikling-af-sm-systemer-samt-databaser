/**
 * Task 4:
 * 1) Use the "npm init" command to initialize a new project.
 * 2) Fill out all the fields. Node will create a package.json file. You need to double check that everything is correct.
 * 3) After that, run "npm install uuid", wait for UUID to install and verify that it is in "dependencies" in package.json.
 * 4) Import uuid and generate a UUID (console log it)
 * 
 * Help: Slide 14-17
 * Help: https://www.npmjs.com/package/uuid (Read Quickstart)
 */

const { v4: uuidv4 } = require('uuid');
 console.log(uuidv4());

