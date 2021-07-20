const fs = require('fs');

// reading from blog3

const readStream = fs.createReadStream('./docs/blog3.txt', {
  encoding: 'utf-8',
});
const WriteStream = fs.createWriteStream('./docs/blog4.txt');
// The on is like an eventlistener but this time we are listening on data. we will get buffers in chunck.
readStream.on('data', (chunk) => {
  console.log('-------- New Chunk--------');
  console.log(chunk);

  // writing to a new file with the data from another file

  WriteStream.write('\nNew Chunk\n');
  WriteStream.write(chunk);
});
