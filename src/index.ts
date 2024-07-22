#!/usr/bin/env node
import path from "path";
import { fileURLToPath } from "url";
import fse from "fs-extra";
import inquirer from "inquirer";

const CURR_DIR = process.cwd();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templatesDir = path.join(__dirname, "../templates");
const templates = fse.readdirSync(templatesDir);

if (!templates.length) {
  console.log("no template to choose from , templates folder is empty");
  process.exit(0);
}

const questions = [
  {
    name: "project-template",
    type: "list",
    message: "Choose a template for your breadboard chrome extension...",
    choices: templates,
  },
  {
    name: "project-name",
    type: "input",
    message: "Please enter a name for your project:",
    validate: function (input: string) {
      if (/^([A-Za-z\-\\_])+$/.test(input)) {
        return true;
      } else {
        return "Project name should only include letters, numbers, underscores and hashes.";
      }
    },
  },
  {
    name: "confirm-create",
    type: "confirm",
    message: "Confirm generating new project?",
  },
];

inquirer.prompt(questions).then((answers) => {
  const selectedProjectTemplate = answers["project-template"];
  const selectedProjectName = answers["project-name"];
  const userConfirmed = answers["confirm-create"];
  const templatePath = `${templatesDir}/${selectedProjectTemplate}`;

  if (userConfirmed) {
    const destination = `${CURR_DIR}/${selectedProjectName}`;
    fse.copy(templatePath, destination);
    console.log(`Successfully created ${CURR_DIR}/${selectedProjectName}`);
  } else {
    console.log("Aborted creating a new template");
  }
});
