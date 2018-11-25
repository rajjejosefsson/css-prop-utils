# CSS Prop Utils ⚙️

> Util based approach of styling your elements fast and in a reliable way

----

## Setup

If you want to load all css

```js
import "css-prop-utils/css/index.css";
```

If you want to load separate css props classes

```js
import "css-prop-utils/css/display.css";
import "css-prop-utils/css/flex-wrap.css";
import "css-prop-utils/css/justify-content.css";
```

Example:

```html
<div class="u-display--flex u-flex-wrap--wrap u-justify-content--center">
 <h1>Hello World<h1>
</div>
```

Class names syntax: `u-{prop}--{value}`

display.css:

```css
.u-display--inline {
  display: inline;
}
.u-display--block {
  display: block;
}
.u-display--contents {
  display: contents;
}
.u-display--flex {
  display: flex;
}
.u-display--grid {
  display: grid;
}
.u-display--inline-block {
  display: inline-block;
}
.u-display--inline-flex {
  display: inline-flex;
}
.u-display--inline-grid {
  display: inline-grid;
}
.u-display--inline-table {
  display: inline-table;
}
.u-display--list-item {
  display: list-item;
}
.u-display--run-in {
  display: run-in;
}
.u-display--table {
  display: table;
}
.u-display--table-caption {
  display: table-caption;
}
.u-display--table-column-group {
  display: table-column-group;
}
.u-display--table-header-group {
  display: table-header-group;
}
.u-display--table-footer-group {
  display: table-footer-group;
}
.u-display--table-row-group {
  display: table-row-group;
}
.u-display--table-cell {
  display: table-cell;
}
.u-display--table-column {
  display: table-column;
}
.u-display--table-row {
  display: table-row;
}
.u-display--none {
  display: none;
}
.u-display--initial {
  display: initial;
}
.u-display--inherit {
  display: inherit;
}
```

Currently following props exists

```txt
align-content
align-items
align-self
box-sizing
display
flex-direction
flex-flow
flex-wrap
flex
float
font-weight
hyphens
justify-content
justify-items
justify-self
line-break
object-fit
order
overflow-wrap
overflow-x
overflow-y
overflow
place-content
place-items
place-self
position
resize
text-align
text-decoration
text-overflow
vertical-align
visibility
white-space
word-break
word-wrap
```

## For Developing 👨‍💻

The CSS is generated from the following file:
`scripts/propertiesList.json`

later on is the css scrapped from desired webpage,
and with the help of a customized *query selector*

Examples:

```json
{
  "name": "align-content",
  "selector": ".w3-table-all.notranslate tr td:nth-child(1)",
  "url": "https://www.w3schools.com/cssref/css3_pr_align-content.asp"
}
```

```json
{
  "name": "font-weight",
  "selector": "#Values ~ dl dt > code:nth-child(1)",
  "ignoreValues": [
    "<number>"
  ],
  "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight"
},
```

In some cases we can use a custom helper to generate the
classes

```json
{
  "name": "flex",
  "from": 1,
  "to": 5
},
```
