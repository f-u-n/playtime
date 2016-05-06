/**
 * Compare Anagrams Solution:
 * Compares the sum of ASCII codes for each string
 */
 
function compare (a, b) {
 var sumA = 0,
     sumB = 0;
 
 if (a === b || a.length != b.length) return false;
 
 for (var i=0; i < a.length; i++) {
  sumA = sumA + a.charCodeAt(i);
  sumB = sumB + b.charCodeAt(i);
 }
 
 return sumA === sumB; 
}
