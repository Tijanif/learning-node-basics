// GLOBAL OBJECT - like the window object but this is specific to NODE - represent the global context in NODE.

// console.log(global);

// setTimeout(() => {
//   console.log('I am inside the timeout');
//   clearInterval(intervall);
// }, 3000);

// const intervall = setInterval(() => {
//   console.log('In the intervall');
// }, 1000);

console.log(__dirname); // absoulte path of the current folder a file is in

console.log(__filename); // bsoulte path of the current folder a file is in with added name of the file.
