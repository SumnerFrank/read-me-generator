// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]"
  } if (license === "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]"
  } else if (license === "Do What The F*ck You Want To Public License") {
    return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]"
  } else {
    return "License Not Valid";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## This application is covered by the ${data.license} license!
  ## Contents
  - [Description](#description)
  - [Motivation](#motivation)
  - [How This Project Stands Out](#How-This-Project-Stands-Out)
  - [Lanugages Used](#languages)
  - [Contact Me!](#gitHub)
  ## Description
  ${data.description}
  ${data.installation}
  ${data.usage}
  ${data.contributionGuidelines}
  ${data.testInstructions}
  ## Motivation
  ${data.motivation}
  ## How This Project Stands Out
  ${data.unique}
  ## Languages
  ${data.languages}
  ## GitHub
  <a href="https://github.com/${data.gitHub}">Find Me Here!</a>
  ## Email
  ${data.email}
`;
}

module.exports = generateMarkdown;
