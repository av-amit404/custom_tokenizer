
//Tokenizer that preserves all whitespace and punctuation.
function tokenize(text) {
    return text.match(/\S+\s*|\s+/g) || [];
}
// Not able to reconstruct the string back to original using this function, as not able preserves all whitespace.
/*
function tokenize(text) {
  const tokens = [];
  const pattern = /[A-Za-z0-9'-]+|[^\sA-Za-z0-9'-]+/g;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    tokens.push(match[0]);
  }

  return tokens;
}
*/

// Reconstructs original string by concatenating token texts directly.
function reconstructFromTokens(tokens) {
  return  tokens.filter(t => t !== null).join('');
}

// Comapre function of original text to reconstucted text.
function compareOriginalReconstructed(original, reconstructed) {
  return original === reconstructed;
}

module.exports = {
  tokenize,
  reconstructFromTokens,
  compareOriginalReconstructed
};
