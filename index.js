// function hello() {
//     console.log("hello")

//     return "hello"
// }

// const hello = function() {
//     console.log("hello")
//     return "hello"
// }

// const hello = () => {
//     console.log("hello")
//     return "hello"
// }

// const hello = () => {
//     return "hello"
// }

const hello = () => "hello"

// console.log(hello())


const sayHello = () => {
    console.log("Hello Lorenzo")
}

// const displayingNum = (num) => {
//     console.log("this is the produced value:" + num)
// }

const alertNum = (num) => {
    alert("this is the produced value:" + num)
}


const doSumAndGreet = (n1, n2, callback) => {
    const sum = n1 + n2
    // TAKES SOME TIME TO COMPUTE

    callback(sum) // "something"(), undefined() // () => { console.log("Hello Lorenzo") }
    // displayingNum(sum)
}

// doSumAndGreet(2, 3, displayingNum)

// doSumAndGreet(2, 3, alertNum)


const sum = (n1, n2) => {
    return n1 + n2
}

const result = sum(5, 3)

const _result = function(){ return sum(9, 10) }
// const _result = () => sum(5, 3)

console.log(result)
console.log(_result())




const displayingNum = (num) => {
    console.log("this is the produced value:" + num)
}

const greet = (name, age) => {
    console.log("Hello " + name + " you are: " + age)
}

const computeAge = (n1, n2, callback) => {
    const age = n1 + n2

    // callback("Foram") // greet("Foram")
    callback(age) // (age) => greet("Alexander", age), displayingNum(age)
    

}

// computeAge(10, 20, function () { greet("Stefano") })
// computeAge(10, 20, greet)
// computeAge(10, 20, greet)
computeAge(10, 20, (age) => greet("Stefano", age))
computeAge(12, 40, (age) => greet("Alexander", age))
computeAge(4, 40, (age) => greet("Rashmi", age))

computeAge(1, 40, (age) => displayingNum(age))

computeAge(1, 40, displayingNum)

// computeAge(10, 20, () => greet("Lorenzo"))
// computeAge(10, 20, () => greet("Rashmi"))
// computeAge(10, 20, () => greet("Foram"))

// div.addEventListener("click", (event) => greet(event, "Stefano"))
// div.addEventListener("click", (event) => greet(event))
// div.addEventListener("click", someFunction)


const animals = [
    "cat", "dog", "mouse", "rabbit", "horse", "spider", "snake"
]

const displayAnimal = (type, name) => {
    console.log("We found a " + type + " and we've named it " + name)
}
const displaySingleAnimal = (type) => {
    console.log("We found a " + type)
}

const getAnimal = (arr, callback) => {
    const randNum = Math.floor(Math.random() * arr.length)
    const selectedAnimal = arr[randNum]

    // callback(selectedAnimal , name) // (animalType, animalName) => displayAnimal(animalType, animalName))

    callback(selectedAnimal)
}

// getAnimal(animals, "Roger", (animalType, animalName) => displayAnimal(animalType, animalName))
getAnimal(animals, (x) => displayAnimal(x, "Robert"))
getAnimal(animals, (x) => displayAnimal(x, "Oliver"))
getAnimal(animals, displaySingleAnimal)


// ___________________________________________________________________________

const array1 = ['a', 'b', 'c', 'd', 'e'];


// .forEach()

// cycles over array elements and runs a callback function which has the element of each cycle as parameter

array1.forEach((elem) => { console.log(elem) })

const arrOfNum = [1,1232,315,34,65,66,7]

// .map()

// is a non mutating method that transforms the original element of an array and returns a new array out of the operation (REMEMBER TO RETURN FROM THE CALLBACK FUNCTION!)

const mappedElems = arrOfNum.map((num) => num * 2 )

// mappedElems

const people = ["Rashmi", "John", "Abnet", "Matiss", "Cian"]

const list = people.map(str => `<li>${str}</li>`)

// list

// console.log(list.join(""))

// list.forEach(li => { document.getElementsByTagName("body")[0].appendChild(li) })

const arrObjPeople = [
    {name: "Stefano", age: 12, kudos: 250}, 
    {name: "John", age: 25, kudos: 1000}, 
    {name: "Abnet", age: 35, kudos: 100}, 
    {name: "Cian", age: 15, kudos: 10},
]

arrObjPeople.forEach(obj => console.log( "FOREACH", obj.name ))

console.log(arrObjPeople.map(obj => obj.kudos))

console.log(arrObjPeople.map( function(obj) { return obj.kudos }))


// .filter() 

// filters the elements of an array using a condition that you provide, you'll return either true or false from the function, and for the elements that
// returned true they will be put in a new array of filtered elements

console.log(arrObjPeople.filter(person => person.age > 15 ))
console.log(arrOfNum.filter(num => num > 66))


// ES5 alternative to filter

// const numHigherThan = []

// for (let i = 0; i < arrOfNum.length; i++ ) {
//     const num = arrOfNum[i]
//     if ( num > 66 ) {
//         numHigherThan.push(num)
//     }
// }

// console.log(numHigherThan)

const arrOfStrings = ["1ijasidnjasd", "iajasd", "asdiunqwomalksmd", "askjndkijasndkjnaskd"]

console.log(arrOfStrings.filter(str => str.length > 15))

// .find()
// similar to filter but this one will not return a new array, it will return the first element found that meets the condition (eg. {name: "Stefano", ...etc})
console.log(arrObjPeople.find(person => person.age > 5 ))
console.log(arrOfNum.find(n => n < 2))

// .reduce()

// another way to cycle an array and produce a value out of it. The value will depend on the data type you use as the initial value of the reduce.
// you have accumulator which is the returned element of the previous cycle (initially is the initial value)
// and currentValue which is the current element in the cycle. Combining the two things will give you the ability to reduce a collection to a single entity
// or creating a completely different entity out of the cycled elements. It's probably the most powerful method and you'll learn to use it over time.
 

const _arrOfNum = [21,123,15,34,65,66,7]

const reduced = _arrOfNum.reduce((accumulator, currentValue) => {
    console.log(accumulator)
    console.log(currentValue)
    return accumulator + currentValue
}, 0)


const reducedAgesSum = arrObjPeople.reduce((acc, curr) => acc + curr.age, 0)
const reducedArr = arrObjPeople.reduce ((acc, curr) => acc.concat(curr.age), [])

console.log(reduced)
console.log(reducedAgesSum)
console.log(reducedArr.filter(num => num > 15))