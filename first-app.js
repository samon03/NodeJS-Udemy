// console.log("Hello World From Node.js");
// const fs = require('fs');
// fs.writeFileSync('hello.txt', 'Hello From Node');

// function sayHello(name)
// {
//     console.log('Hello ' + name);
// }

// sayHello('Samon');

const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);