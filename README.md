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
  git clone https://github.com/av-amit404/custom_tokenizer
```

Go to the project directory

```bash
  cd custom_tokenizer
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
  
  *compareOriginalReconstructed* - Compares the original token generated with the decode tokens and logs whether they match.

**encoder.js** - Has two function which are used for encoding and decoding.

  *encodeTokens* - Encodes each token into a numeric hash value using a polynomial rolling hash function.

  *decodeToTokens* - Decodes a list of hash values back into their original tokens using the provided hash map

## Examples-

```javascript
Enter text ('end' to quit): hi    hi Hello needed   hi
Tokens: [ 'hi', 'hi', 'Hello', 'needed', 'hi' ]
Encoded Tokens: [ 3329, 3329, 69609650, 245590426, 3329 ]
Reconstructed: "hi hi Hello needed hi"
Exact match: true
---
Enter text ('end' to quit): hi ; ! hello ; good evening
Tokens: [ 'hi', ';', '!', 'hello', ';', 'good', 'evening' ]
Encoded Tokens: [ 3329, 59, 33, 99162322, 59, 3178685, 112767811 ]
Reconstructed: "hi ; ! hello ; good evening"
Exact match: true
---
Enter text ('end' to quit): end
```

