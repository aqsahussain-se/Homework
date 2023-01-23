let fruits = ["watermelon" , "strawberry" , "mango" , "kiwi"];

console.log(fruits);
console.log(fruits[2]);
console.log(fruits[2 + 1]);
console.log (typeof fruits);


myLife = {
    myName: "Aqsa",
    myAge: 28,
    address: "Birmingham, England",
    family: {
        sisters: ["Ruqayya" , "Hajra" , "Aliyah" , "Sana"],
        other: ["Nan" , "Uncle" , "cousins"]
    },
    job: "Civil Servant",
    hobbies: ["reading" , "painting" , "cinema"],
}

console.log(myLife["family"]["other"][1]);
console.log(typeof myLife);


for(let k = 20; k <= 30; k++){
    console.log(k)
}

console.log("====");

for(let j = 15; j > 0; j--){
    console.log(j)
}


for(let value of fruits){
    console.log(value)
}

let car = [
    {
        'name': 'car1',
        'colour': 'blue',
        'year': '2009',
        'company': 'Ford',
        'model': 'KA'
    },
    {
        'name': 'car2',
        'colour': 'red',
        'year': '2003',
        'company': 'Nissan',
        'model': 'Micra'
    },
    {
        'name': 'car3',
        'colour': 'silver',
        'year': '2012',
        'company': 'Audi',
        'model': 'A5'
    },
    {
        'name': 'car4',
        'colour': 'black',
        'year': '2017',
        'company': 'Mercedes',
        'model': 'C Class'
    },
    {
        'name': 'car5',
        'colour': 'green',
        'year': '2021',
        'company': 'Honda',
        'model': 'Civic'
    },

]


for(let key in car){
    console.log(car[key])
}


