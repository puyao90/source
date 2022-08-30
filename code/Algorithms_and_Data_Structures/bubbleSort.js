function genRandomArray(n) {
  var arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = Math.round(10 * Math.random());
  }
  return arr;
}

function swap(arr, index1, index2) {
  var x = arr[index2];
  arr[index2] = arr[index1];
  arr[index1] = x;
  return arr;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    var count = 0;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j, j + 1);
        count++;
      }
    }
    if (count == 0) {
      break;
    }
  }
  return arr;
}
var array = genRandomArray(8);
console.log(array);
console.log(bubbleSort(array));

var arr1 = [1, 3, 5, 7];
var arr2 = arr1.slice();
console.log(arr2);
arr1[0] = 2;
console.log(arr2);
