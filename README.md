# CSS Prop Utils ⚙️

> Util based approach of styling your elements fast and in a reliable way

----

Use Example:

```html
<div class="u-display--flex u-flex-wrap--wrap u-justify-content--center">
 <h1>Hello World<h1>
</div>
```

As you can see you will not have to remember any name.
`.u-{property name}--{value}`

## Setup

Import all utils with:

```js
import "css-prop-utils";
```

Import appropriate css-props classes

```js
import "css-prop-utils/css/display.css";
import "css-prop-utils/css/flex-wrap.css";
import "css-prop-utils/css/justify-content.css";
```

## Supported Properties (Currently)

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
