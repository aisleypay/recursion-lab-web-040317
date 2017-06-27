function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(s) {
  if (s.length > 1 ) {
    return reverseString(s.slice(1)) + s[0];
  } else {
    return s;
  }
}

function isPalindrome(s) {
  if (s.length === 1) {
    return true
  } else if (s[0] === s[s.length - 1]) {
    return isPalindrome(s.slice(1, s.length - 1))
  } else {
    return false;
  }
}

function addUpTo(array, index) {
  if (index) {
    return array[index] + addUpTo(array, index - 1);
  } else {
    return array[index];
  }
}

function maxOf(a) {
  if (a.length > 1) {
    if (a[0] < a[1]) {
      return maxOf(a.slice(1))
    } else {
      return maxOf([].concat(a.slice(0,1), (a.slice(2))))
    }
  } else {
    return a[0]
  }

  // return maxOf( a[0] < a[a.length -1] ? a.slice(1) : a.slice(0, a.length -1))
}

function includesNumber(a, el) {
  if (a.length > 0) {
    return a[0] === el ? true : includesNumber(a.slice(1), el)
  } else {
    return false
  }
}
