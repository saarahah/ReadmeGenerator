// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![Github license](https://img.shields.io/badge/license-${data.license.replace(" ", "_")}-green.svg)

  ## Description: 
  
  ${data.description}
  
  
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
<br/>
${data.usage}
  
  
 ## License
  
This project is licensed under ${data.license}.
  

## Contributions
  
In order to contribute to the repo:
<br/>
${data.contributions}
  
## Tests
  
To test, use the command: 
<br/>
${data.tests}

 ## Questions

 If you have any questions email me at ${data.email}
 <br/>
 My Github account is https://github.com/${data.username}
  
  
  ---
  © 2020
  
  

`;
}

module.exports = generateMarkdown;
