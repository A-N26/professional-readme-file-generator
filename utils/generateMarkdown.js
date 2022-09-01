// ↓ Function to return a licence badge based on which licence is passed in.
// If there is no licence, return an empty string.
function renderLicenceBadge(Licence) {
  if (Licence !== "none") {
    return `${renderLicenceLink(Licence)}`;
  } else {
    return `[![Licence: Public Domain Mark 1.0](https://img.shields.io/badge/license-PublicDomain-blue.svg)](https://creativecommons.org/publicdomain/mark/1.0/)`;
  }
}

// ↓ Function to return the licence link.
// If there is no licence, return un empty string.
function renderLicenceLink(Licence) {
  if (Licence === "unlicense") {
    return `[![Licence: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://choosealicense.com/licenses/unlicense/)`;
  }
  if (Licence === "MIT") {
    return `[![Licence: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)`;
  }
  if (Licence === "ISC") {
    return `[![Licence: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }
  if (Licence === "GNU GPLv3") {
    return `[![Licence: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else {
    return `[![Licence: Public Domain Mark 1.0](https://img.shields.io/badge/license-PublicDomain-blue.svg)](https://creativecommons.org/publicdomain/mark/1.0/)`;
  }
}

// ↓ Function to create license section of README.
//  If there is no licence, return un empty string.
function renderLicenceSection(Licence) {
  if (Licence !== "none") {
    return `${renderLicenceBadge(Licence)}`;
  } else {
    return `[![Licence: Public Domain Mark 1.0](https://img.shields.io/badge/license-PublicDomain-blue.svg)](https://creativecommons.org/publicdomain/mark/1.0/)`;
  }
}

// ↓ Function to generate markdown for README.
function generateMarkdown(data) {
  return `
# <div align="center"> **${data.Title}** </div>

${renderLicenceSection(data.Licence)}

---

## <div align="center"> *Description* </div>

  ${data.Description}

## <div align="center"> *Languages Used* </div>

  ${data.Languages}

---

## *Table of Contents*

* [Installation](#Installation)
* [Usage](#Usage)
* [Links](#Links)
* [Credits](#Credits)
* [Licence](#Licence)
* [Badges](#Badges)
* [Questions](#Questions)
* [Tests](#Tests)

---

## *Installation*

  ${data.Installation}

## *Usage*

  ${data.Usage}

## *Links*

<details>

<summary>Github Links</summary>

>${data.GUser}

* >${data.GLink}

* >${data.DLink}

</details>

## *Credits*

  ${data.Credits}


## *Licence*

  ${renderLicenceLink(data.Licence)}

## *Badges*

  ${data.Badges}

## *Questions*

If you would like to as me anything (ama) about the project, please contact me on the email mentioned below (or if you would like to contact via GitHub the link to my profile in mentioned in the links section up above!):

* >${data.ELink}

## *Contributing*

  ${data.Contribution}

## *Tests*

  ${data.Tests}

`;
}

module.exports = { generateMarkdown };
