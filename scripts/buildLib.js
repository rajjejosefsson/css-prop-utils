"use strict";
import fs from "fs";
import postcss from "postcss";
import CleanCSS from "clean-css";
import path from "path";
import autoprefixer from "autoprefixer";
import postcssImport from 'postcss-import'
import chalk from "chalk";

const CSS_DIR = "generated/css";

function run() {
  console.log(chalk.green("Building " + chalk.blue.underline.bold("Lib...")));

  fs.readdir(CSS_DIR, (err, filenames) => {
    if (err) throw err;

    const names = filenames.map(filename => path.basename(filename, ".css"));

    createImportAllCssFile(names);

    Promise.all([names.forEach(name => buildLibFile(name))]).then(() => {
      console.log(chalk.black.bgGreen.bold("Build of prop-utils is Complete!"));
    });
  });
}

function buildLibFile(filename) {
  return new Promise((resolve, reject) => {
    console.log(`Processing ./${filename}.css...`);

    fs.readFile(`./${CSS_DIR}/${filename}.css`, (err, css) => {
      if (err) throw err;

      return postcss([postcssImport, autoprefixer])
        .process(css, {
          from: `./${CSS_DIR}/${filename}.css`,
          to: `./css/${filename}.css`,
          map: { inline: false }
        })
        .then(result => {
          result.warnings().forEach(warn => {
            console.warn(warn.toString());
          });

          fs.writeFileSync(`./css/${filename}.css`, result.css);

          if (result.map) {
            fs.writeFileSync(`./css/${filename}.css.map`, result.map);
          }

          return result;
        })
        .then(result => {
          const minified = new CleanCSS().minify(result.css);
          fs.writeFileSync(`./css/${filename}.min.css`, minified.styles);
        })
        .then(resolve)
        .catch(error => {
          console.log(error);
          reject();
        });
    });
  });
}

function createImportAllCssFile(fileNames) {
  const allCss = fileNames
    .map(
      file => `@import "${file}.css";
`
    )
    .join("");
  fs.writeFile(`./css/index.css`, allCss, error => {
    if (error) console.log(error);
  });
}

run();
