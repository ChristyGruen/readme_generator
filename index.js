// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


inquirer
  .prompt([
    {type: 'input',message: 'Enter your project title?',name: 'projTitle' },
    {type: 'input',message: 'Provide a short description of including the what, why and how of your project.',name: 'projDesc' },
    {type: 'input',message: 'What are the steps required to install your project?',name: 'projInstall' },
    {type: 'input',message: 'Provide instructions and examples for use.',name: 'projInstructions' },
    {type: 'list',message: 'Select the license that will be used for this project',choices:['MIT', 'apache-2.0','cc','gpl', 'isc'], name: 'projLicense' },
    {type: 'input',message: 'Provide your collaborators, with links to their gitHub profiles',name: 'projCollab' },
    {type: 'input',message: 'Provide any third-party asset attributions',name: 'projAttribution' },
    {type: 'input',message: 'Provide any tutorials used, with links to the tutorial',name: 'projTutorial' },
    {type: 'input',message: 'Provide a list of features (optional)',name: 'projFeatures' },
    {type: 'input',message: 'Provide information on how to contribute (optional)',name: 'projContribute' },
    {type: 'input',message: 'Provide tests for your application (optional)',name: 'projTests' },
  ]
 
  )
  .then((response)=>{
    //write readme

    console.log(finalStr)
    //save readme

    // TODO: Create a function to write README file
    fs.writeFile('README.md', finalStr,(err) => err ? console.error(err): 


// TODO: Create an array of questions for user input
// keep this in to possibly incorporate for loop later
// const questions = [
//   {type: 'input',message: 'Enter your project title?',name: 'projTitle' },
//   {type: 'input',message: 'Provide a short description of including the what, why and how of your project.',name: 'projDesc' },
//   {type: 'input',message: 'What are the steps required to install your project?',name: 'projInstall' },
//   {type: 'input',message: 'Provide instructions and examples for use.',name: 'projInstructions' },
//   {type: 'list',message: 'Select the license that will be used for this project',choices:['MIT', 'apache-2.0','cc','gpl', 'isc'], name: 'projLicense' },
//   {type: 'input',message: 'Provide your collaborators, with links to their gitHub profiles',name: 'projCollab' },
//   {type: 'input',message: 'Provide any third-party asset attributions',name: 'projAttribution' },
//   {type: 'input',message: 'Provide any tutorials used, with links to the tutorial',name: 'projTutorial' },
//   {type: 'input',message: 'Provide a list of features (optional)',name: 'projFeatures' },
//   {type: 'input',message: 'Provide information on how to contribute (optional)',name: 'projContribute' },
//   {type: 'input',message: 'Provide tests for your application (optional)',name: 'projTests' },
// ];







// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      
    ])

},

// Function call to initialize app
init();