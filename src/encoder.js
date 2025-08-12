
// Encodes each token, building a lookup map.
function encodeTokens(tokens, base = 31, mod = 1e9 + 9) {
 const hashList = [];
  const hashMap = new Map();

  for (const token of tokens) {
    let hashVal = 0;
    for (const ch of token) {
      hashVal = (hashVal * base + ch.charCodeAt(0)) % mod;
    }
    hashList.push(hashVal);
    hashMap.set(hashVal, token);
    }

  return { hashList, hashMap };
}

// Decodes a list of hash values back into their token strings using hashMap.
function decodeToTokens(hashList, hashMap) {
  return hashList.map(h => hashMap.get(h) ?? null);
}

module.exports = { encodeTokens, decodeToTokens };
