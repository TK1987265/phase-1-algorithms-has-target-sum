function hasTargetSum(arr, target) {
  // write your algorith here
  let seen = new Set();
  for (let num of arr) {
    let complement = target - num;
    if (seen.has(complement)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here
*/
// The time complexity of the hasTargetSum function is O(n), where n is the number of elements in the input array.




/* 
  Add your pseudocode here
*/
// 1. Create an empty set called seen.
// 2. Iterate through each element num in the array.
// 3. Calculate the complement by subtracting num from the target.
// 4. Check if the complement is in the seen set.
// 5. If the complement is found, return true.
// 6. Otherwise, add num to the seen set.
// 7. If no complement is found after iterating through the array, return false.
/*
  Add written explanation of your solution here
*/
// The function iterates through each element in the array exactly once, performing constant-time operations (e.g., set lookup and set addition) inside the loop. Since the loop iterates through each element in the array once, the time complexity is linear, O(n), where n is the number of elements in the array. This is because the time taken by the function grows linearly with the size of the input array.
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
