// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge
  switch(license) {
    case 'Apache 2.0': badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'Boost Software': badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      break;
    case 'IBM Public': badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
      break;
    case 'MIT': badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'Mozilla': badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
      break;
    default: badge = ''
  }
  return badge   
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link
  switch(license) {
    case 'Apache 2.0': link = 'https://opensource.org/licenses/Apache-2.0'
      break;
    case 'BoostSoftware': link = 'https://www.boost.org/LICENSE_1_0.txt'
      break;
    case 'IBM Public': link = 'https://opensource.org/licenses/IPL-1.0'
      break;
    case 'MIT': link = 'https://opensource.org/licenses/MIT'
      break;
    case 'Mozilla Public': link = 'https://opensource.org/licenses/MPL-2.0'
      break;
    default: link = ''
  }
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${data.title} is licensed under the terms of ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  Creator: ${data.author}

  ## Description

  ${data.desciption}

  ## Table of Contents

  - [usage](#usage)
  - [license](#license)
  - [installation](#installation)
  - [tests](#tests)
  - [contribute](#contribute)
  - [email](#email)

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Installation

  ${data.installation}

  ## Tests

  ${data.tests}

  ## Contribute

  ${data.contribute}

  ## Email

  If you have any questions or concerns, please Contact me ${data.email}
`;
}

module.exports = generateMarkdown;
