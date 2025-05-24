function isPalindrome(str) {
  const lowerCaseStr = str.toLowerCase();
  let leftIndex = 0;
  let rightIndex = lowerCaseStr.length - 1;

  while (leftIndex < rightIndex) {
    if (lowerCaseStr[leftIndex] !== lowerCaseStr[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
