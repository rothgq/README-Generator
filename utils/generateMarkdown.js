// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  }
  if (license === "Apache") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === "GNU v3.0") {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license === "MIT License") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license === "Eclipse") {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  }
  if (license === "Boost Software License") {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }
  if (license === "Mozilla Public License") {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [license](#license)\n`;
  }
  return "";
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    
    licensed under ${license}.`;
  }
  return "";
}

function generateMarkdown(data) {
  return `# ${data.title}
Created by ${data.name}
${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

${renderLicenseLink(data.license)}

## Description
${data.description}

## Installation
${data.install}

## Usage
${data.usage}

## Contributors
${data.contributors}

## Tests
${data.tests}

## Questions
* Github - (https://github.com/${data.github}/)
* E-mail - ${data.email}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
