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
<div class="p-display--flex p-flex-wrap--wrap p-justify-content--center">
 <h1>Hello World<h1>
</div>
```

Class names syntax: `p-{prop}--{value}`

display.css:

```css
.p-display--inline {
  display: inline;
}
.p-display--block {
  display: block;
}
.p-display--contents {
  display: contents;
}
.p-display--flex {
  display: flex;
}
.p-display--grid {
  display: grid;
}
.p-display--inline-block {
  display: inline-block;
}
.p-display--inline-flex {
  display: inline-flex;
}
.p-display--inline-grid {
  display: inline-grid;
}
.p-display--inline-table {
  display: inline-table;
}
.p-display--list-item {
  display: list-item;
}
.p-display--run-in {
  display: run-in;
}
.p-display--table {
  display: table;
}
.p-display--table-caption {
  display: table-caption;
}
.p-display--table-column-group {
  display: table-column-group;
}
.p-display--table-header-group {
  display: table-header-group;
}
.p-display--table-footer-group {
  display: table-footer-group;
}
.p-display--table-row-group {
  display: table-row-group;
}
.p-display--table-cell {
  display: table-cell;
}
.p-display--table-column {
  display: table-column;
}
.p-display--table-row {
  display: table-row;
}
.p-display--none {
  display: none;
}
.p-display--initial {
  display: initial;
}
.p-display--inherit {
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

## Develop

The CSS is generated from the following file:
`scripts/propertiesList.json`

later on is the css scrapped from desired webpage,
and with the help of customized *query selector*

Example:

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
