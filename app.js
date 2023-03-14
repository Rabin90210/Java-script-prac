lrt arr = [20, 30, 40, 50, 100]

// First element of array:
console.log(arr[0])

//Last element of array:
console.log(arr[arr.length - 1])
         
//Add emelent onto end of array:
arr.push(200 )

let newArr = arr.filter((element) => {
    console.log(element)
    return true;
})

console.log(arr);