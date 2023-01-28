let firstArray = ["aqsa", "aliyah", "sana", "hajra", "ruqayya"]
console.log(firstArray)
firstArray.sort()
firstArray.reverse()
console.log(firstArray)


let secondArray = [
    {item: "lipBalm", price: 8},
    {item: "iPhone", price: 200},
    {item: "waterBottle", price: 13},
    {item: "hairClip", price: 2}
   
]

// console.log(secondArray)

secondArray.sort( (a, b) => a.price - b.price)
console.log(secondArray)


let thirdArray = ["1", "4", "9", "16", "25"]
console.log(thirdArray)

let reverseArray = thirdArray.reverse()
console.log("reversed:", reverseArray)

// the reverse methos does overwrite the original array

let fourthArray = ["banana", "apple", "lemon"]
console.log(fourthArray)

let fifthArr = fourthArray.join("&")
console.log(fifthArr)

let sixthArr = fourthArray.join(" ")
console.log(sixthArr)

let sevenArr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(sevenArr)

let firstSlice = sevenArr.slice(4,9)
console.log(firstSlice)

let eightArr = [3, 6, 9]
let nineArr = [2, 4, 8]
let mergeExample = eightArr.concat(nineArr)
console.log(mergeExample)

// FRUITS-Q8

const fruits = ["strawberry", "kiwi", "banana", "orange", "apple"]
console.log(fruits)
fruits.push("mango", "lemon", "melon")
console.log(fruits)

fruits.unshift("grape", "tomato")
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.sort()
console.log(fruits)

let stringFruits = fruits.join("%")
console.log(stringFruits)

const kiwiExample = stringFruits.slice(13,17)
console.log(kiwiExample)

// Q9

const numbers = [5, 10, 15, 20, 25]
const numberArray = numbers.map(myFunction)

function myFunction(num){
    return num + 6
}

console.log(numberArray)

// Q10

const colours = ["blue", "pink", "green", "purple"]
const colourArray = colours.map(newFunction)

function newFunction(addStar) {
    return addStar + "*"
}

console.log(colourArray)

// Q11

let brands = ["Nike", "Adidas", "Chanel", "Nivea", "Google"]
console.log(brands)

function filterBrands(brands){
    if(brands.includes("a")){
        return brands
    }
}

let aBrands = brands.filter(filterBrands)

console.log(aBrands)
