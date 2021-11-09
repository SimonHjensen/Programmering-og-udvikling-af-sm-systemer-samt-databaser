/**
 * Task 3:
 * Write a program that logs the user's operating system.
 * You have to use the os module.
 * 
 * Help: Slide 13
 * 
 * Extra help: https://nodejs.org/api/os.html#ostype
 * os.type(): "Returns the operating system name as returned by uname(3). For example, it returns 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows."
 */

const os = require('os');

server = { 
    type: os.type(),
    arkitektur: os.arch(),
    hjemmemappe: os.homedir(),
    host: os.hostname(),
    uptime: os.uptime()
}

console.log(server)