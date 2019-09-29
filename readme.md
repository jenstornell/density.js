# density.js

## Features

- Vanilla javascript with no dependencies
- Very small code
- Option to set stopwords to not be included
- Option to set a minimum number of characters allowed
- Option to set a limit of words on each row

### Simple example

```js
let html = `<h1>A html heading</h1><p>Here is a html paragraph</p>`;

let kd = new Density();
kd.set(html);
console.log(kd.density);
```

### Output

It will output an array that looks like below.

```text
0: {count: 2, word: "a"}
1: {count: 2, word: "html"}
2: {count: 1, word: "heading"}
3: {count: 1, word: "here"}
4: {count: 1, word: "is"}
5: {count: 1, word: "paragraph"}
```

## Options

### `characters` (int)

A minimum number of characters allowed. It's perfect if you need to skip short words.

### `limit` (int)

The number of words on each row. Sometimes you may need two or three words on each row.

### `stopwords` (array)

To skip words you can use an array of stopwords.

## License

MIT