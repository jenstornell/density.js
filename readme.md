# density.js

*Version: 1.1*

A class to convert html or text content to keyword density. The output will be like below.

```text
{count: 2, word: "a"}
{count: 2, word: "html"}
{count: 1, word: "heading"}
{count: 1, word: "here"}
{count: 1, word: "is"}
{count: 1, word: "paragraph"}
```

## Features

- Vanilla javascript with no dependencies
- Stopwords - Words to not be included
- Characters - Min number of characters allowed
- Words - Number of words on each row

## Setup

Place the script just before `</body>`.

```html
<script src="density.js"></script>
```

## Usage

Place the code below right below the `script` tag in the setup.

### Example - Simple

```js
const html = `<h1>A html heading</h1><p>Here is a html paragraph</p>`;
const results = density.getSorted(html);
console.log(results);
```

### Output

It will output an array in the console that looks like below.

```text
0: {count: 2, word: "a"}
1: {count: 2, word: "html"}
2: {count: 1, word: "heading"}
3: {count: 1, word: "here"}
4: {count: 1, word: "is"}
5: {count: 1, word: "paragraph"}
```

## Options

| Key          | Type   | Description |
| ------------ | ------- | ----------- |
| `characters` | `int`   | A minimum number of characters allowed. It's perfect if you need to skip short words. |
| `stopwords`  | `array` | To skip words you can use an array of stopwords. Make sure that the stopwords are lowercase. |
| `words`      | `int`   | The number of words on each row. Sometimes you may need two or three words on each row. |
| `filter`     | `array` | In case you have already sanitized the input you can only use the filters you need |

or

| Key          | Type   | Description |
| ------------ | ------- | ----------- |
| `selected`   | `array` | Only make a result of selected keywords |

### Example - with options

```js
const html = `<h1>A html heading</h1><p>Here is a html paragraph</p>`;
const options = {
  characters: 3,
  words: 2,
  stopwords: ["here is", "a html"],
  filter: ['toText', 'toAlpha', 'toLowercase', 'stripWhitespace']
};
const results = density.getUnsorted(html, options);

console.log(results);
```

### Example - with selected keywords

```js
const html = `<h1>A html heading</h1><p>Here is a html paragraph</p>`;
const options = {
  selected: ['html heading', 'a', 'paragraphen']
};
const results = density.getUnsorted(html, options);

console.log(results);
```

## Donate

Donate to [DevoneraAB](https://www.paypal.me/DevoneraAB) if you want.

## License

MIT