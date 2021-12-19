// RULES OF ARROW FUNCTIONS
// const addNums = (numOne, numTwo) => numOne + numTwo; -- implied return with only 1 action
//const addNums = (numOne, numTwo) => {
//   console.log(numOne, numTwo);
//   return numOne + numTwo;
// };

// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach((profileItem) => {
//     console.log(profileItem)
//   });
// };

// CLEANER VERSION OF ABOVE CODE
// profileDataArr.forEach(profileItem => console.log(profileItem));

//"require" global module available to import only modules that are needed
const fs = require('fs');
const generatePage = require('./src/page-template.js')


const profileDataArgs = process.argv.slice(2, process.argv.length);

const Name = profileDataArgs[0];
const Github = profileDataArgs[1];

// use interpolated variable ${variableName}
// const generatePage = (userName, GithubName) => `Name: ${userName}, Github: ${GithubName}`;


//node "FileSystem.writeFile"
// arg is new file name, 2nd is file to be written, 3rd error handling
fs.writeFile('index.html', generatePage(Name, Github), err => {
  //if err detected throw (return/display) error
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});