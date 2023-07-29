// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


let licenseBadges = [
  {licenseName: "MIT",
  licenseBadge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'},
  {licenseName: "apache-2.0",
  licenseBadge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'},
  {licenseName: "Boost",
  licenseBadge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'},
  {licenseName: "gnu-v3",
  licenseBadge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
  {licenseName: "Mozilla",
  licenseBadge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'}
]


inquirer
  .prompt([
    {type: 'input',message: 'Enter your project title?',name: 'projTitle' },
    {type: 'input',message: 'Provide a short description of including the what, why and how of your project.',name: 'projDesc' },
    {type: 'input',message: 'What are the steps required to install your project?',name: 'projInstall' },
    {type: 'input',message: 'Provide instructions and examples for use.',name: 'projInstructions' },
    {type: 'list',message: 'Select the license that will be used for this project',choices:['MIT', 'apache-2.0','Boost','gnu-v3', 'Mozilla'], name: 'projLicense' },
    {type: 'input',message: 'Provide your collaborators, with links to their gitHub profiles',name: 'projCollab' },
    {type: 'input',message: 'Provide information on how to contribute (optional)',name: 'projContribute' },
    {type: 'input',message: 'Provide tests for your application (optional)',name: 'projTests' },
    {type: 'input',message: 'Provide your gitHub username to create a github link so users can review the documentation', name: 'projGitHubUN' },
    {type: 'input',message: 'Provide your gitHub email so users can  contact you with questions', name: 'projGitHubEmail' },
  ]
 
  )
  .then((response)=>{
    //use projLicense to return associated badge URL
    let prettyBadge
    for (i in licenseBadges){
      if (licenseBadges[i].licenseName == response.projLicense){
        prettyBadge = licenseBadges[i].licenseBadge
      } else{console.log("trouble afoot")}
    }
    console.log(prettyBadge)

    //write readme
    const finalStr = docContent(response);
    console.log(finalStr)
    //save readme

    // TODO: Create a function to write README file
    fs.writeFile('README.md', finalStr,(err) => err ? console.error(err): 

    console.log('Success!'))
  }
  )


function docContent(response){
  return `
  # ${response.projTitle}

  ## Description
  
      ${response.projDesc}

  ## Table of Contents
  [Installation Instructions](#installation-instructions)<br>
  [Usage](#usage)<br>
  [License](#license)<br>
  [Contributors](#contributors)<br>
  [Tests](#tests)<br>
  [Questions](#questions)<br>

  
  ## Installation Instructions
  
      ${response.projInstall}
  
  ## Usage
  
      ${response.projInstructions}
  
  ## License
    This project is covered under the ${response.projLicense} license.

  ## Contributors
      ${response.projCollab}
  
  #### How to Contribute
      ${response.projContribute}

  ## Tests
      ${response.projTests}

  ## Questions
      For further information, access my gitHub profile here:
      <https://github.com/${response.projGitHubUN}>
      For questions, comments and concerns, contact me here:
      <${response.projGitHubEmail}>
  `
}







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
// {type: 'input',message: 'Provide your gitHub link so users can review the documentation and contact you with questions', name: 'projQnA' }
// ];







// TODO: Create a function to initialize app
// function init() {
//   inquirer
//     .prompt([
      
//     ])

// },

// // Function call to initialize app
// init();