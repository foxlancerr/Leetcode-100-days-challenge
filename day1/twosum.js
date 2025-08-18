// Leetcode Question relavent to DSA
// 1.(Two Sum)
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Question nums=[2,3,5,2], target = 7

// Alghorithm
// For Loop 0(n)2 complexity

// steps
// for loop to iterate the nums at last, start from 0 index
// nested for loop to iterate the nums at last, start from i + 1
// if condition to check wheter the nums[i] + nums[j] == target, then return [i, j]
// else again run loop

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([4, 2, 5, 2], 7));

// way 2 time complexity reduced 0(n)

// hashing or dictonary
// make a object seen = {}
// for loop to iterate at last, start from 0
// compute value from target - nums[i] // complement = target - nums[i]
// check complemt values exist then got it the value and return [seen[complement], i]
// if not then make to store the computed value in seen dic // seen[complement] = i
function twoSum(nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (complement in seen) {
      return [seen[complement], i];
    } else {
      seen[nums[i]] = i;
    }
  }
}

console.log(twoSum([4, 2, 5, 2], 7));
