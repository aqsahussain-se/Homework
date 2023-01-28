let header = document.getElementsByTagName("h1")[0]
header.style.color = "#f5dadf"
header.style.webkitTextStroke = "0.5px black"


let myString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(myString)
console.log(myString.length)

for (var i = 0; i < myString.length; i++) {
    console.log(myString.charAt(i));
  }

let stringReplace = myString.replace("BCDE", "w-W-w")
console.log(stringReplace)

let lowerCaseString = myString.toLowerCase()
console.log(lowerCaseString)

let dToH = myString.slice(3,8)
console.log(dToH)


let stringToArray = dToH.split()
console.log(stringToArray)

let body = document.getElementsByTagName("body")[0]
let q7 = document.createElement("p")
body.appendChild(q7)
q7.innerText = "Question 7 answer: charCodeAt gives you the unicode of a character in a string. Each letter, digit, or symbol is assigned a unique numeric value that applies across different platforms and programs. See examples in console log for letters A,Q,S."


let code = myString.charCodeAt(0)
console.log("The unicode of A is", code)

let code2 = myString.charCodeAt(16)
console.log("The unicode of Q is", code2)

let code3 = myString.charCodeAt(18)
console.log("The unicode of S is", code3)

// substring extracts characters between two index positions in string.

let subStringExample = myString.substring(0, 5)
console.log(subStringExample)