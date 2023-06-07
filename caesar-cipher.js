    /**
     * @param {string} cleartext
     * @param {number} k the alphabet rotation factor
     * @return {string} the encrypted string
     */

    const alphabetLength = 26;
    const alphabetLowerCase = [
        ...Array(alphabetLength)
    ].map((_, idx) => String.fromCharCode(idx + 'a'.charCodeAt()));

    function caesarCipher(s, k) {
        k = k % alphabetLength;
        s = s.toLowerCase();
        let newString = '';
    
        for(let i = 0; i < s.length; i++) {
            let currentLetter = s[i];
            if(/\s/.test(currentLetter)) {
                newString += currentLetter;
                continue;
            }

            let newIdx = (alphabetLowerCase.indexOf(currentLetter)) + k;

            if(newIdx > 25) { 
                newIdx = newIdx - alphabetLength;
            }

            if(newIdx < 0) {
                newIdx = newIdx + alphabetLength;
            }

            if(s[i] === s[i].toUpperCase()) {
                newString += alphabetLowerCase[newIdx].toUpperCase();
            } else {
                newString += alphabetLowerCase[newIdx];
            }

        }

        return newString;
    }