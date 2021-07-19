// we can import the files but it will be transformed to empty objects we cannot accces variables from required files unless we manually export what we want to use.

const { people, ages } = require('./people'); // returns and empy {}

console.log(people);
console.log(ages);

// os for oparating system lots of info about computer. its node core

const os = require('os');

console.log(
  // os.platform(),
  // os.homedir(),
  // os.hostname(),
  os.userInfo()
  // os.version(),
  // os.type()
);
