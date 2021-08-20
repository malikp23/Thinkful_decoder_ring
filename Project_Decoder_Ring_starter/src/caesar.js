const caesarModule = (function () {
 
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    const charCodes = input.toLowerCase().split('').map((char) => {
      return char.charCodeAt(0);
    });
    const shiftChars = charCodes.map((code) => {
      if (code > 122 || code < 97) {
        return String.fromCharCode(code);
      } else if (code <= 122 && code >= 97) {
        let shiftCode = (encode) ? code + shift : code - shift;
       
        if (shiftCode > 122) {
          shiftCode -= 26;
        }
        else if (shiftCode < 97) {
          shiftCode += 26;
        } return String.fromCharCode(shiftCode);
      }
    });
    return shiftChars.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };