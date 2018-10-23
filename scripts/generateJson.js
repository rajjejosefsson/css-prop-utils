"use strict";
import fs from "fs";
import propertyList from "./propertiesList.json";
import { getUrlPropertyValues } from "../utils/getUrlPropertyValues";
import { getRangeValues } from "../utils/getRangeValues";
import trailingLine from "single-trailing-newline";
import chalk from "chalk";
import cliSpinners from "cli-spinners";
import ora from "ora";

const spinner = new ora({
  text: chalk.green("Generating " + chalk.blue.underline.bold("JSON Files")),
  spinner: cliSpinners.point
});

async function run() {
  spinner.start();

  for (let item of propertyList) {
    // Getting Property Values from URL
    if (item.selector) {
      const values = await getUrlPropertyValues(
        item.url,
        item.selector,
        item.ignoreValues
      );
      writeJsonFile(values, item.name);
      continue;
    }

    // Getting Range Values eg. [1,2,3,4,5]
    if (item.from && item.to) {
      const values = await getRangeValues(item.from, item.to);
      writeJsonFile(values, item.name);
      continue;
    }
  }

  spinner.stop();
}

function writeJsonFile(values, name) {
  fs.writeFile(
    `./json/${name}.json`,
    trailingLine(JSON.stringify(values)),
    error => {
      if (error) console.log(error);
    }
  );
}

run();
