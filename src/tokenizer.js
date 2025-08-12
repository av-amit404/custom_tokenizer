
//Tokenizer that preserves all whitespace and punctuation.
function tokenizewhitespaces(text) {
    return text.match(/\S+\s*|\s+/g) || [];
}

// tokenize text, capture punctuation, and reconstruct
function tokenize(text) {
  const tokens = [];
  const pattern = /[A-Za-z0-9'-]+|[^\sA-Za-z0-9'-]+/g;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    tokens.push(match[0]);
  }
  return tokens;
}


// Reconstructs original string by concatenating token texts directly.
function reconstructFromTokens(tokens) {
  return  tokens.filter(t => t !== null).join(' ');
}

// Comapre function of original text to reconstucted text.
function compareOriginalReconstructed(originalTokens, reconstructedTokens) {
  if (originalTokens.length !== reconstructedTokens.length) {
    console.log("Exact match?: false (length mismatch)");
    return false;
  }

  const allMatch = originalTokens.every((tok, idx) => tok === reconstructedTokens[idx]);
  return allMatch;
}

module.exports = {
  tokenizewhitespaces,
  tokenize,
  reconstructFromTokens,
  compareOriginalReconstructed
};
