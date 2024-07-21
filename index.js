// 47 - masala   ////   Berilgan massiv ichida k indeksdagi elementni oxirgi indeksdagi element bilan almashtiring.
function swapElements(arr, k) {
    arr.push(...arr.splice(k,1,arr.pop()))
    console.log(arr);
}
// swapElements([1, 2, 3, 4, 5], 2); // [1, 2, 5, 4, 3]



// 48 - masala   ////   Berilgan massiv ichidagi barcha elementlarni n marta takrorlang va yangi massiv qaytaring.
function repeatElements(arr, n) {
    let repeatedArr = [];
    arr.forEach(element => {
      for (let i = 0; i < n; i++) {
        repeatedArr.push(element);
      }
    });
    return repeatedArr;
}
// console.log(repeatElements([1, 2, 3], 3));




// 49 - masala    ////    Berilgan massiv ichidagi juft indeksdagi elementlar yig'indisini toping.
function sumEvenIndexedElements(arr) {
    let result = 0
   arr.forEach((item, index) => {
    if (index % 2 == 0) {
        result += item
    }
   })
   console.log(result);
}
// sumEvenIndexedElements([1, 2, 3, 4, 5, 6]); // 9 (1 + 3 + 5)




// 50 - masala    ////   Berilgan massiv ichidagi barcha unikal (takrorlanmagan) elementlarni qaytaring.
function uniqueElements(arr) {
    let result = {};

    arr.forEach(element => {
      result[element] = (result[element] || 0) + 1;
    });

    let uniqueElements = [];

    for (let element in result) {
      if (result[element] === 1) {
        uniqueElements.push(parseInt(element));
      }
    }
    return uniqueElements;
}
// console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]



// 51 - masala   ////  Berilgan massiv ichidagi barcha qatorlarni teskarisiga o'giring.
function reverseStringsInArray(arr) {
    let new_arr = []
    arr.forEach((item) => {
       let res = item.split("").reverse().join("")
       new_arr.push(res)
    })
    console.log(new_arr);
}
// reverseStringsInArray(['abc', 'def', 'ghi']); // ['cba', 'fed', 'ihg']




// 52 - masala    ////     Berilgan massiv ichidagi elementlarni n qadamga chapga ko'chiring.
function rotateArrayLeft(arr, n) {
    let res = arr.splice(0, n)
    arr.push(...res)
    console.log(arr); 
}
// rotateArrayLeft([1, 2, 3, 4, 5, 6, 7], 3); // [4, 5, 6, 7, 1, 2, 3]
  
