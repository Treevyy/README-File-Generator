// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') return '';
  return `![License](https://img.shields.io/badge/License-${license.replace('', '%20')}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') return '';
  return `This application is covered under the [${license}](https://choosealicense.com/licenses/) license.`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None');
  return `## License
  
  This project is licensed under the [${license}](https://choosealicense.com/licenses/) license.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - ${renderLicenseLink(data.license)}
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any additonal questions, you can contact me at:
  - GitHub [${data.github}](https://github.com/${data.github})
  - Email [${data.email}](mailto:${data.email})
`;
}

export default generateMarkdown;
