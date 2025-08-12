
// It run recusively till 'end' command is not given.
const readline = require('readline');
const { tokenize, reconstructFromTokens, compareOriginalReconstructed } = require('./tokenizer');
const { encodeTokens, decodeToTokens } = require('./encoder');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise(res => rl.question(q, res));

(async () => {
  while (true) {
    const input = await ask("Enter text ('end' to quit): ");
    if (input.trim().toLowerCase() === 'end') break;
    if (input == '') continue;

    // Tokenizing the string.
    const tokens = tokenize(input);
    console.log("Tokens:", tokens);

    // Encoding tokens to numbers.
    const {hashList, hashMap} = encodeTokens(tokens);
    console.log("Encoded Tokens:", hashList);
    console.log("HASHMAP:", hashMap);

    // Decoding the number back to token.
    const decoded = decodeToTokens(hashList, hashMap);
    // console.log("Decoded Tokens:", decoded);

    // Constructing the original string.
    const reconstructed = reconstructFromTokens(decoded);
    console.log("Reconstructed:", JSON.stringify(reconstructed));

    // Comapring the original string to reconstructed.
    console.log("Exact match:", compareOriginalReconstructed(input, reconstructed));
    // console.log('---');
  }
  rl.close();
})();
