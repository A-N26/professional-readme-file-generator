// ↓ To include and require package(s) for the application.
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown.js");

// ↓ Array of questions to ask for creating the application. (Termed as objects in inquirer site documentation.)
const questions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "Title",
        message: "What is the title of the readme file? (required)",

        validate: (TitleInput) => {
          if (TitleInput) {
            return true;
          } else {
            console.log("Please enter a title for the file.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "Description",
        message: "Add a description. (required)",

        validate: (DescriptionInput) => {
          if (DescriptionInput) {
            return true;
          } else {
            console.log("Please enter a description.");
            return false;
          }
        },
      },
      {
        type: "checkbox",
        name: "Languages",
        message:
          "What languages did you use for this project? (check all that apply)",
        choices: [
          "Html",
          "CSS",
          "Javascript",
          "Node.js",
          "Bootstrap",
          "jQuery",
        ],

        validate: (LanguagesCheck) => {
          if (LanguagesCheck) {
            return true;
          } else {
            console.log("Please check one or more that apply.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "Installation",
        message:
          "What are the steps one needs to follow to install this application?",
      },
      {
        type: "input",
        name: "Usage",
        message:
          "Include usage instructions along with any images/media that may apply.",
      },
      {
        type: "input",
        name: "GUser",
        message: "Please enter your GitHub Username. (required)",

        validate: (GUserInput) => {
          if (GUserInput) {
            return true;
          } else {
            console.log("Please enter a valid GitHub username.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "GLink",
        message:
          "Please enter a link to your github repository of this project. (required)",

        validate: (LinkInput) => {
          if (LinkInput) {
            return true;
          } else {
            console.log("Please enter the link!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "DLink",
        message: "Please enter a link to your deployed link of this project.",

        validate: (LinkInput) => {
          if (LinkInput) {
            return true;
          } else {
            return "";
          }
        },
      },
      {
        type: "input",
        name: "ELink",
        message:
          "If you would like to enter an email address for people to reach out to you if they need to contact you, Please do so here!",
      },
      {
        type: "input",
        name: "Credits",
        message:
          "Were there any contributors, third-party assets, and/or tutorials that you would like to include?",
      },
      {
        type: "list",
        name: "License",
        message: "Please specify the license from the choices.",
        choices: ["MIT", "ISC", "GNU GPLv3", "Unlicense", "none"],

        validate: (LicenceList) => {
          if (LicenceList) {
            return true;
          } else {
            console.log("Please select a licence type");
            return "false";
          }
        },
      },
      {
        type: "input",
        name: "Badges",
        message: "Would you like to include any badges?",
      },
      {
        type: "input",
        name: "Contribution",
        message:
          "Please mention any instructions for other users who wish to contribute to your project in any way, shape or form!",
      },
      {
        type: "input",
        name: "Tests",
        message:
          "Please mention any instructions for users who would like to test your project.",
      },
    ])
    .then((data) => {
      return data;
    });
};

// // ↓ To see the above questions (and type their answers/data) in terminal.
// inquirer.prompt(questions).then((data) => {
//   console.log(data);
//   return data;
// });

// ↓ To create a function to write README file
function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) =>
    err
      ? console.error(err)
      : console.log("file has been created and saved successfully!")
  );
}

// ↓ To create a function to initialize app
function init() {
  questions()
    .then((data) => {
      return generateMarkdown(data);
    })
    .then((Markdown) => {
      writeToFile("./generated_ReadMe/ReadMe.md", Markdown);
    })
    .catch((err) => {
      console.log(err);
    });
}

// ↓ Function call to initialize app.
init();
