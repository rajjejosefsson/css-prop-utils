"use strict";

var cheerio = require("cheerio");
var axios = require("axios");

export async function getUrlPropertyValues(pageUrl, selector, ignoreValues) {
  const response = await axios.get(pageUrl);
  var $ = cheerio.load(response.data);

  let values = [];

  $(selector).each(function(i, elem) {
    let textValue = $(this).text();

    if (ignoreValues && ignoreValues.find(v => v === textValue)) return;

    values.push(
      $(this)
        .text()
        // replaces \r \n that are in sequent with ,
        .replace(/\r\n/g, ",")
        // replaces double white space, tabs, newlines, etc,
        .replace(/\s\s+/g, "")
        .replace(/^[ ]+|[ ]+$/g, "")
    );
  });

  return values;
}
