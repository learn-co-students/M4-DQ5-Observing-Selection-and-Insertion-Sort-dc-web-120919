function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])

  for(let start = 0; start < arr.length; start++){
    for(let currI = start; currI > 0 && arr[currI-1] > arr[currI]; currI --){

      let temp = arr[currI];
      arr[currI] = arr[currI-1]
      arr[currI-1] = temp 
    }
  }

  return arr
}
