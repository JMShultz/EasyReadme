const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ Title,Description, TableOfContents, instalation, Usage, License ,Contributing,Tests,Questions}) =>
 `# ${Title}
 ![Github licence](http://img.shields.io/badge/license-${License}-blue.svg)
  ## Description
  ${Description}

  ## Table Of Contents
  * [instalation](#instalation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## instalation
  ${instalation}
  
  
  ## Usage
  ${Usage}
  
  ## License
  ${License}
  
  ## Contributing
  ${Contributing}
  
  
  ## Tests
  ${Tests}
  
  ## Questions
  ${Questions}
  
    `;
  

 
 

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'What is your project description',
    },
    {
      type: 'list',
      name: 'License',
      message: 'What kind of license for your project?',
      choices:['MIT','GNU','Apache']
    },

    {
      type: 'input',
      name: 'Contributing',
      message: 'if any other work wants to be done.',
    },
    {
      type: 'input',
      name: 'instalation',
      message: 'What are the things to start your project',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'How do you use this website?',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'how do you test npm?',
      default:'npm test'
    },

    {
      type: 'input',
      name: 'Questions',
      message: 'What are some questions you might have.',
    },

  ])
  .then((answers) => {
    const ReadPageContent = generateReadMe(answers);

    fs.writeFile('file.text', ReadPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created ReadMe file!')
    );
  });
