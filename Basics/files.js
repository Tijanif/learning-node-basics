const fs = require('fs/promises');

// Reading Files Old Way

// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// Reading Files New Way
fs.readFile('./docs/blog1.txt')
  .then((data) => console.log(data.toString()))
  .catch((err) => console.log(err));

// Writing Files

fs.writeFile('./docs/blog1.txt', 'Hello, World!').then(() => {
  console.log('file was written');
});

// Writing to files that are not there - node create the file for you
fs.writeFile('./docs/blog2.txt', 'Hello, I am in blog two!').then(() => {
  console.log('file was written');
});

// Directories creating a new folder
fs.mkdir('./assets')
  .then(() => {
    console.log('folder created');
  })
  .catch((err) => {
    console.log(err);
  });

// Cheaking of file exist
// if (!fs.exists('./assets')) {
//   fs.mkdir('./assets')
//     .then(() => {
//       console.log('folder created');
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// Removing directory
fs.rmdir('./assets').then(() => {
  console.log('folder removed');
});

// Deleting Files
fs.unlink('./docs/deletme.txt').then(() => {
  console.log('I was deleted');
});
