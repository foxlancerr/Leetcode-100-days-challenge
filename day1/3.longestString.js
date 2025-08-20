// 3. Longest Substring Without Repeating Characters
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

let lengthOfLongestSubstring = (s) => {
   let uniqueSet = new Set()
   let left = 0, maxLength= 0;

   for(let right = 0; right < s.length; right++){
    while(uniqueSet.has(s[right])){
        uniqueSet.delete(s[left])
        left++
    }
    uniqueSet.add(s[right])
    maxLength = Math.max(maxLength, right - left + 1)
   }
   return maxLength
};

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('bbbbb'))
