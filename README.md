# Tokenizer CLI

A Node.js command-line tool for tokenizing text to encoding tokens using hashes, and reconstructing the original text from hashes.This tokenizer uses a custom vocabulary according to user input.

## Features

- Tokenization: Splits input text into words and punctuation marks.

- Encoding: Converts tokens into numeric hashes using hash.

- Decoding: Decoding hash values back into tokens.

- Reconstruction: Rebuilds the original text from .

- Compare: Compare original input to reconstruted text.

- Interactive CLI: Continuously accepts user input until the end command is issued.

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

To start the interactive CLI:

```bash
  npm start
```

The program will prompt you to enter text. Type your input and press Enter. To exit, type end and press Enter.

## Files

**cli.js** - A Node.js command-line tool for continuously accepts user input until the end command is issued.

**tokenizer.js** - Has three function
  
  *tokenize* - Splits the input text into tokens, preserving all whitespace and punctuation

  *reconstructFromTokens* - Reconstructs the original string from the list of tokens.
  
  *compareOriginalReconstructed* - Compares the original input string with the reconstructed string and logs whether they match.

**encoder.js** - Has two function which are used for encoding and decoding.

  *encodeTokens* - Encodes each token into a numeric hash value using a polynomial rolling hash function.

  *decodeToTokens* - Decodes a list of hash values back into their original tokens using the provided hash map

## Examples-

```javascript
Enter text ('end' to quit): Hi Hello Hello1 Hello hi
Tokens: [ 'Hi ', 'Hello ', 'Hello1 ', 'Hello ', 'hi' ]
Encoded Tokens: [ 72479, 157899164, 894874607, 157899164, 3329 ]
HASHMAP: Map(4) {
  72479 => 'Hi ',
  157899164 => 'Hello ',
  894874607 => 'Hello1 ',
  3329 => 'hi'
}
Reconstructed: "Hi Hello Hello1 Hello hi"
Exact match: true
Enter text ('end' to quit): Hi     Hello                3 Tabs
Tokens: [ 'Hi     ', 'Hello \t\t', '3 ', 'Tabs' ]
Encoded Tokens: [ 936863053, 741095533, 1613, 2598814 ]
HASHMAP: Map(4) {
  936863053 => 'Hi     ',
  741095533 => 'Hello \t\t',
  1613 => '3 ',
  2598814 => 'Tabs'
}
Reconstructed: "Hi     Hello \t\t3 Tabs"
Exact match: true
Enter text ('end' to quit): end
```

