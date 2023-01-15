// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return //a badge??
  } else if (license === "Mozilla") {
    return //a badge??
  } if (license === "Open Software License 3.0") {
    return //a badge??
  } else if (license === "Do What The F*ck You Want To Public License") {
    return //a badge??
  } else {
    return "License Not Valid";
  }
}
console.log(renderLicenseBadge("MIT"));

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  #Title 
  ${data.title}
  ##Contents
  -Description
  -Motivation
  -Solution
  -What I Learned
  -How This Project Stands Out
  -Lanugages Used
  -Licesnses 
  ##Description
  ${data.description}
  ##Motivation
  ${data.motivation}
  ##Solution
  ${data.solution}
  ##Learn
  ${data.learned}
  ##Stand Out
  ${data.unique}
  ##Languages
  ${data.language}
  ##License
  ${data.license}

`;
}

module.exports = generateMarkdown;
