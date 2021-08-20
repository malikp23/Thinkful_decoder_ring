const substitutionModule = (function () {
  const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  function _checkForDuplicates(array) {
    return new Set(array).size !== array.length;
  }

  function substitution(input, alphabet, encode = true) {
     if (!alphabet) return false;
    const altAlphabet = alphabet.toLowerCase().split('');
   
    if (altAlphabet.length !== 26 || 
      _checkForDuplicates(altAlphabet)) return false;
    
    if (encode) {
      const encodedMessage = input.toLowerCase().split('')
        .map((char) => {
          for (let i = 0; i < standardAlphabet.length; i++) {
            if (char === standardAlphabet[i]) {
              return altAlphabet[i];
            } else if (char.charCodeAt(0) > 122 || 
          char.charCodeAt(0) < 97) {
              return char;
            }
          }
        });
      return encodedMessage.join('');
    }else if (!encode) {
      const newMessage = input.toLowerCase().split('')
        .map((char) => {
          for (let i = 0; i < altAlphabet.length; i++) {
            if (char === altAlphabet[i]) {
              return standardAlphabet[i];
            }else if (char.charCodeAt(0) > 122 || 
          char.charCodeAt(0) < 97) {
              return char;
            }
          }
        });
      return newMessage.join('');
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
