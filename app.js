//"require" global module available to import only modules that are needed

const fs = require('fs');

const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);
const Name = profileDataArgs[0];
const github = profileDataArgs[1];

// assigns variables values in order left to right from 0 of array
// const [name, github] = profileDataArgs;


// const printProfileData = (profileDataArr) => {
//   console.log(profileDataArr);
// };

// printProfileData(profileDataArgs);


// implied return when there ins only 1 statement and {} are not needed
// const generatePage = () => "Name: Joe, Github: Joehub";

// use interpolated variable ${variableName}
// const generatePage = (userName, GithubName) => `Name: ${userName}, Github: ${GithubName}`;


// creates line breaks as show in code
const generatePage = (Name, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${Name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};
// console.log(name, github);
// console.log(generatePage(name, github))

//node "FileSystem.writeFile"
// arg is new file name, 2nd is file to be written, 3rd error handling
fs.writeFile('index.html', generatePage(Name, github), err => {
  //if err detected throw (return/display) error
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});