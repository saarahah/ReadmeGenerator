// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![Github license](https://img.shields.io/badge/license-${data.license.replace(" ", "_")}-green.svg)

  ## Description: ${data.description}
  
  
  ## Table of Contents 
  
  * [Installation](#installation) 
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)

  
  
## Installation
  
 To install, run the command: ${data.installation}
  
  
## Usage 
  
Here is some information about using the repo:
${data.usage}
  
  
 ## License
  
  This project is licensed under ${data.license}.
  

## Contributions
  
In order to contribute to the repo:
${data.contributions}
  
## Tests
  
To test, use the command: ${data.tests}

 ## Questions

 If you have any questions email me at ${data.email}
 My Github account is Github.com/${data.username}
  
  
  ---
  © 2020
  
  

`;
}

module.exports = generateMarkdown;
