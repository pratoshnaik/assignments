/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let nstr1 = str1.split("");
    let nstr2 = str2.split("");
    if(nstr1.length != nstr2.length){
      return false;
    }
    if(nstr1.sort().join('')===nstr2.sort().join('')){
      return true;
    }
}


module.exports = isAnagram;
