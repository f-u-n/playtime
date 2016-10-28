function charFreq(string) {
    var count = {};
    for (i = 0; i < string.length; i++) {
        if (count[string.charAt(i)]) {
            count[string.charAt(i)]++;
        } else {
            count[string.charAt(i)] = 1;
        }
    }
    return count;
}

charFreq("abbabcbdbabdbdbabababcbcbab");
