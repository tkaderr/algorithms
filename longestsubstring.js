var lengthOfLongestSubstring = function(s) {
    let result = 0
    let t = []
    for (var i = 0; i < s.length; i++) {
        if (t.includes(s[i])) {
            t = t.slice(t.indexOf(s[i]) + 1)
        }

        t.push(s[i])
        if (t.length > result) {
            result = t.length
        }
    }
    return result
};
