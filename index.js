// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

//licenseBadges object
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

//ask all the questions
inquirer
  .prompt([
    {type: 'input',message: 'Enter your project title?',name: 'projTitle' },
    {type: 'input',message: 'Provide a short description of including the what, why and how of your project.',name: 'projDesc' },
    {type: 'input',message: 'What are the steps required to install your project?',name: 'projInstall' },
    {type: 'input',message: 'What steps are required to run the application?',name: 'projInstructions' },
    {type: 'list',message: 'Select the license that will be used for this project',choices:['MIT', 'apache-2.0','Boost','gnu-v3', 'Mozilla'], name: 'projLicense' },
    {type: 'input',message: "Provide a collaborator's gitHub name so users can access their gitHub",name: 'projCollab' },
    {type: 'input',message: 'Provide information on how to contribute (optional)',name: 'projContribute' },
    {type: 'input',message: 'Provide tests for your application (optional)',name: 'projTests' },
    {type: 'input',message: 'Provide your gitHub username to create a github link so users can review the documentation', name: 'projGitHubUN' },
    {type: 'input',message: 'Provide your gitHub email so users can  contact you with questions', name: 'projGitHubEmail' },
    {type: 'input',message: 'Provide a description of what the reference provided', name: 'refDescription' },
    {type: 'input',message: 'Provide a link to the reference site', name: 'refLink' },
  ]
 
  )
  .then((response)=>{

    console.log('====================response=================')
    //use projLicense to return associated badge URL
    let prettyBadge
    for (i in licenseBadges){
      if (licenseBadges[i].licenseName == response.projLicense){
        prettyBadge = licenseBadges[i].licenseBadge
      } else{console.log("trouble afoot")}
    }
    console.log(prettyBadge)

    //write readme
    const finalStr = docContent(response,prettyBadge);
    console.log(finalStr)
    //save readme

    // TODO: Create a function to write README file
    fs.writeFile('README.md', finalStr,(err) => err ? console.error(err): 

    console.log('Success!'))
  }
  )


//function to populate the README
function docContent(response, prettyBadge){
  return `
  # ${response.projTitle}

 ${prettyBadge}

  ## Description
  
      ${response.projDesc}

  ## Table of Contents
  [Installation Instructions](#installation-instructions)<br>
  [Usage](#usage)<br>
  [License](#license)<br>
  [Contributors](#contributors)<br>
  [Tests](#tests)<br>
  [Questions](#questions)<br>
  [References](#references)<br>

  
  ## Installation Instructions
  
      ${response.projInstall}
  
  ## Usage
  
      ${response.projInstructions}
  Watch a demo of the app here:
  <https://watch.screencastify.com/v/LGnvXAt6R6cMVc3untRV>
  
  ## License
    This project is covered under the ${response.projLicense} license.

  ## Contributors
  ${response.projCollab} at <https://github.com/${response.projCollab}>
      
  #### How to Contribute
      ${response.projContribute}

  ## Tests
      ${response.projTests}

  ## Questions
  For further information, access my gitHub profile here:
  <https://github.com/${response.projGitHubUN}>
  <br>
  For questions, comments and concerns, contact me here:
  <${response.projGitHubEmail}>

  ## References
  ${response.refDescription} provided by:
  <${response.refLink}>
  `
}