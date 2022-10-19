//Задача 1
function compareArrays(arr1, arr2) {
   let result = arr1.every((elementArr1, indexArr1) => arr1.length === arr2.length && (elementArr1 === arr2[indexArr1]));
   return result;
  }


//Задача 2

function advancedFilter(arr) {
  let resultArr = arr.filter(number => number >=0).filter(number => number % 3 === 0).map(number => number* 10);

  return resultArr;
}
