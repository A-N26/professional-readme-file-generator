// ↓ Function to return a licence badge based on which licence is passed in.
// If there is no licence, return an empty string.
function renderLicenceBadge(Licence) {
  if (Licence === "none" && Licence !== "") {
    return `[![License: Public Domain Mark 1.0](https://img.shields.io/badge/license-PublicDomain-blue.svg)](https://creativecommons.org/publicdomain/mark/1.0/)`;
  } else if (Licence === "Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://choosealicense.com/licenses/unlicense/)`;
  } else if (Licence === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)`;
  } else if (Licence === "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else if (Licence === "GNU GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else {
    return "";
  }
}

// ↓ Function to return the licence link.
// If there is no licence, return un empty string.
function renderLicenceLink(Licence) {
  if (Licence === "unlicense") {
    return `[Unlicense](https://choosealicense.com/licenses/unlicense/)`;
  }
  if (Licence === "MIT") {
    return `[MIT](https://choosealicense.com/licenses/mit/)`;
  }
  if (Licence === "ISC") {
    return `[ISC](https://opensource.org/licenses/ISC)`;
  }
  if (Licence === "GNU GPLv3") {
    return `[GPL v3](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else {
    return "";
  }
}

// ↓ Function to create license section of README.
//  If there is no licence, return un empty string.
function renderLicenceSection(Licence) {
  if (Licence !== "none") {
    return `
        ## License
        ${renderLicenceBadge(Licence)}`;
  } else {
    return `
        ## License
        [No Licence has been set for this project](https://choosealicense.com/no-permission/)`;
  }
}

// ↓ Function to generate markdown for README.
function generateMarkdown(data) {
  return `
        # ${data.Title}

        ## Description
        ${data.Description}

        ## Languages Used
        ${data.Languages}

        ## Table of Contents
        * [Installation](#Installation)
        * [Usage](#Usage)
        * [Link](#Link)
        * [Credits](#Credits)
        * [License](#License)
        * [Badges](#Badges)

        ---

        ## Installation
        ${data.Installation}

        ## Usage
        ${data.Usage}

        ## Link
        ${data.GUser}
        ${data.GLink}
        ${data.DLink}

        ## Credits
        ${data.Credits}

        ## License
        ${renderLicenceSection(Licence)}
        ${renderLicenceLink(Licence)}

        ## Badges
        ${data.Badges}
    `;
}

module.exports = { generateMarkdown };
