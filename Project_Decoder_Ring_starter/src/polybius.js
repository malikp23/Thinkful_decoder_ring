const polybiusModule = (function () {
  const codex = {
 'a': 11,
 'b': 21,
 'c': 31,
 'd': 41,
 'e': 51,
 'f': 12,
 'g': 22,
 'h': 32,
 'i': 42,
 'j': 42,
 'k': 52,
 'l': 13,
 'm': 23,
 'n': 33,
 'o': 43,
 'p': 53,
 'q': 14,
 'r': 24,
 's': 34,
 't': 44,
 'u': 54,
 'v': 15,
 'w': 25,
 'x': 35,
 'y': 45,
 'z': 55
};

function polybius(input, encode = true) {
 
 if (encode) {
   const encodedInput = input.toLowerCase().split('')
     .map((char) => {
       for (let letter in codex) {
         if (letter === char) {
           return `${codex[letter]}`;
         }
         else if (char.charCodeAt(0) === 32) {
           return char;
         }
       }
     });
   return encodedInput.join('');
 }
 else if (!encode) {
   const inputLength = input.split('').filter((char) => {
     return (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 53);
   });
   if (inputLength.length % 2 === 1) {
     return false;
   }
   const theSplitInput = input.split(' ')
     .map((word) => {
       return word.match(/.{1,2}/g);
     });
   
   const decodedOutput = theSplitInput.map((word) => {
     return word.map((pair) => {
       // if digit pair is 42, return 'i/j' instead of i or j.
       if (pair == 42) {
         return 'i/j';
       }
       else {
         for (let letter in codex) {
           if (pair == codex[letter]) {
             return `${letter}`;
           }
         }
       }
     });
   });
   const newOutput = decodedOutput.map((word) => {
     return word.join('');
   });
   return newOutput.join(' ');
 }
}

return {
 polybius,
};
})();

module.exports = { polybius: polybiusModule.polybius };