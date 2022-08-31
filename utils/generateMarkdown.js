// ↓ Function to return a licence badge based on which licence is passed in.
// If there is no licence, return an empty string.
function renderLicenseBadge(License) {
  if (License !== "none") {
    return `${renderLicenseLink(License)}`;
  } else {
    return `[![License: Public Domain Mark 1.0](https://img.shields.io/badge/license-PublicDomain-blue.svg)](https://creativecommons.org/publicdomain/mark/1.0/)`;
  }
}

// ↓ Function to return the licence link.
// If there is no licence, return un empty string.
function renderLicenseLink(License) {
  if (License === "unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://choosealicense.com/licenses/unlicense/)`;
  }
  if (License === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)`;
  }
  if (License === "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }
  if (License === "GNU GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else {
    return `[![License: Public Domain Mark 1.0](https://img.shields.io/badge/license-PublicDomain-blue.svg)](https://creativecommons.org/publicdomain/mark/1.0/)`;
  }
}

// ↓ Function to create license section of README.
//  If there is no licence, return un empty string.
function renderLicenseSection(License) {
  if (License !== "none") {
    return `${renderLicenseBadge(License)}`;
  } else {
    return `[![License: Public Domain Mark 1.0](https://img.shields.io/badge/license-PublicDomain-blue.svg)](https://creativecommons.org/publicdomain/mark/1.0/)`;
  }
}

// ↓ Function to generate markdown for README.
function generateMarkdown(data) {
  return `
# <div align="center"> **${data.Title}** </div>
---
## <div align="center"> *Description* </div>
  ${data.Description}

## <div align="center"> *Languages Used* </div>
  ${data.Languages}

## *Table of Contents*

* [Installation](#Installation)
* [Usage](#Usage)
* [Link](#Link)
* [Credits](#Credits)
* [License](#License)
* [Badges](#Badges)
---
## *Installation*
  ${data.Installation}

## *Usage*
  ${data.Usage}

## *Link*
  >${data.GUser}

  >${data.GLink}

  >${data.DLink}

## *Credits*
  ${data.Credits}

## *License*
  ${renderLicenseSection(data.License)}

## *Badges*
  ${data.Badges}
`;
}

module.exports = { generateMarkdown };
