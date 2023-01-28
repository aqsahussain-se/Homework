let firstDiv = document.querySelector("#first-div")
console.log(firstDiv)

let newHeader = document.createElement("h1")
firstDiv.appendChild(newHeader)
newHeader.innerHTML = "This is an h1 element"

let newPara = document.createElement("p")
firstDiv.appendChild(newPara)
newPara.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laudantium excepturi libero perspiciatis dignissimos nobis, ea saepe, dolores, voluptatem repellat odit beatae voluptates veritatis amet tempora quisquam. Vel, sunt possimus!"

newPara.style.color = "green"

let body = document.getElementsByTagName("body")[0]

let newList = document.createElement("ol")
body.appendChild(newList)

let firstLi = document.createElement("li")
newList.appendChild(firstLi)
firstLi.innerText = "My first point"

let secondLi = document.createElement("li")
newList.appendChild(secondLi)
secondLi.innerText = "My second point"

newList.style.color = "blue"
newList.style.backgroundColor = "lightBlue"
newList.style.padding = "15px 50px"

let newDiv = document.createElement("div")
newDiv.id = "giveID"
body.appendChild(newDiv)
newDiv.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laudantium excepturi libero perspiciatis dignissimos nobis, ea saepe, dolores, voluptatem repellat odit beatae voluptates veritatis amet tempora quisquam. Vel, sunt possimus!"
newDiv.style.border = "5px solid pink"
newDiv.style.textAlign = "center"





