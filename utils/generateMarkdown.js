// ↓ Function to return a licence badge based on which licence is passed in.
// If there is no licence, return an empty string.
function renderLicenseBadge(License) {
  if (License !== "none") {
    return `${renderLicenseSection(License)}`;
  } else {
    return `[![License: Public Domain Mark 1.0](https://img.shields.io/badge/License-PublicDomain-blue.svg)](https://creativecommons.org/publicdomain/mark/1.0/)`;
  }
}

// ↓ Function to return the licence link.
// If there is no licence, return un empty string.
function renderLicenseLink(License) {
  if (License === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)`;
  }
  if (License === "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }
  if (License === "GNU GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)`;
  }
  if (License === "Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://choosealicense.com/licenses/unlicense/)`;
  } else if (License === "none") {
    return `[![License: Public Domain Mark 1.0](https://img.shields.io/badge/License-PublicDomain-blue.svg)](https://creativecommons.org/publicdomain/mark/1.0/)`;
  }
}

// ↓ Function to create license section of README.
//  If there is no licence, return un empty string.
function renderLicenseSection(License) {
  if (License !== "none") {
    return `${renderLicenseLink(License)}`;
  } else {
    return `[![License: Public Domain Mark 1.0](https://img.shields.io/badge/License-PublicDomain-blue.svg)](https://creativecommons.org/publicdomain/mark/1.0/)`;
  }
}

// ↓ Function to generate markdown for README.
function generateMarkdown(data) {
  return `
# <div align="center"> **${data.Title}** </div>🏷️

${renderLicenseBadge(data.License)}

---

## <div align="center"> *Description* </div>📝

${data.Description}

## <div align="center"> *Languages Used* </div>💬

${data.Languages}

---

## *Table of Contents*📖

* [Installation](#Installation)💾
* [Usage](#Usage)🖥️
* [Links](#Links)📎
* [Credits](#Credits)💳
* [Licence](#Licence)🪪
* [Badges](#Badges)🦡
* [Questions](#Questions)❓
* [Tests](#Tests)🧪

---

## *Installation* 💾

${data.Installation}

## *Usage*🖥️

${data.Usage}

## *Links*📎

<details>

<summary>Github repo and deployed Links</summary>

* ${data.GLink}

* ${data.DLink}

</details>

## *Credits*💳

${data.Credits}

## *License*🪪🦡

**(Please Click the BADGE for the license details.)**

${renderLicenseLink(data.License)}

## *Badges*🦡

${data.Badges}

## *Questions*❓

If you would like to as me anything (ama) about the project, please contact me on the info mentioned below:

<details>

<summary>Contact Me</summary>✉️

* [My GitHub Profile](https://github.com/${data.GUser})

* [📧](${data.ELink})

</details>

## *Contributing*

${data.Contribution}

## *Tests*🧪

${data.Tests}
`;
}

module.exports = { generateMarkdown };
