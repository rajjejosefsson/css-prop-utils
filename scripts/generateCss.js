"use strict";
import fs from "fs";
import path from "path";
import chalk from "chalk";

const DIR_NAME = "generated/json";

function run() {
  console.log(
    chalk.green("Generating " + chalk.blue.underline.bold("CSS Files"))
  );

  fs.readdir(DIR_NAME, (err, filenames) => {
    if (err) throw err;
    filenames.forEach(filename => {
      fs.readFile(
        path.resolve(DIR_NAME, filename),
        "utf-8",
        (err, fileContent) => {
          if (err) throw err;
          const filenameWithoutExt = path.basename(filename, ".json");
          const cssContent = generateCssContent(
            filenameWithoutExt,
            JSON.parse(fileContent)
          );
          writeCssToFile(filenameWithoutExt, cssContent);
        }
      );
    });
  });
}

function generateCssContent(filename, fileContent) {
  const cssContent = fileContent
    .map(value => {
      return `.p-${filename}--${value} {
  ${filename}: ${value};
}
`;
    })
    .join("");

  return cssContent;
}

function writeCssToFile(filename, cssContent) {
  fs.writeFile(`./generated/css/${filename}.css`, cssContent, error => {
    if (error) console.log(error);
  });
}

run();
