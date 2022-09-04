# ES6 syntax

## ECMAScript Variables and Data Structures 

### String Methods

```js
string.startsWith("xyz") // returns true or false
string.endsWith("xyz") // returns true or false
string.includes("xyz") // returns true or false
string.search("xyz") // returns index of the first instance of xyz in string
```

### Symbols

```js
const id = Symbol()

const bookObj = {
    title : "JavaScript",
    topics:["strings","arrays","objects"]
    id = "the-javascript-book"
}
bookObj[id] = 412336
console.log(bookObj)

/* OUTPUT
 {
  title: 'JavaScript',
  topics: [ 'strings', 'arrays', 'objects' ],
  id: 'the-javascript-book',
  [Symbol()]: 412336
}
*/
```

### Writing Maps

```js
let course = new Map()

course.set("react", { description: "ui" })
course.set("jest", { description: "testing" })

console.log(course); // returns the map
console.log(course.react || course["react"]); // returns undefined

let details = new Map([
    [new Date(), "today"],
    [2, { javascript: ["js", "node", "react"] }],
    ["items", [1, 2]]
])

console.log(details);
console.log(details.size);

details.forEach(item => {
    console.log(item);
})// logs out items in their insertion order

let detailsObj = {
    3: "hello",
    2: "bye"
}

for (item in detailsObj) {
    console.log(item, detailsObj[item]);
} // logs out items in ascending order

/* OUTPUT
Map(2) {
  'react' => { description: 'ui' },
  'jest' => { description: 'testing' }
}
undefined
Map(3) {
  2022-09-01T18:01:21.278Z => 'today',
  2 => { javascript: [ 'js', 'node', 'react' ] },
  'items' => [ 1, 2 ]
}
3
today
{ javascript: [ 'js', 'node', 'react' ] }
[ 1, 2 ]
2 bye
3 hello
*/
```

### Working with sets

```js
let books = new Set()
books.add("Pride and prejudice")
books.add("War and Peace").add("Oliver Twist")
books.add("War and Peace")

console.log(books) // logs the set of books
console.log(books.size) // logs 3
console.log("has Oliver Twist", books.has("Oliver Twist")) //  logs -> has Oliver Twist true
books.delete("Oliver Twist")
console.log("has Oliver Twist", books.has("Oliver Twist")) //  logs -> has Oliver Twist false

books.map((item)=>{
    console.log(item)
}) // books.map is not a function , .map is not available for sets

books.forEach((item)=>{
    console.log(item)
})// for Each is available for sets 
```

## Arrays and Array Methods

### Using the array spread operator

```js
let cats = ["biscuit", "Junglee"]
let dogs = ["Stella", "Camper"]

let animals = ["smokie","Kurama", "neuay", ...cats, ...dogs]
console.log(animals)// logs ["smokie","Kurama","neuay","biscuit","Junglee","Stella","Camper"]
```

### Destructuring Arrays

```js
let [first, , , , fifth]=["Spokane","Boston","Los Angeles","Seattle","Portland"]
let [firstCity, ...otherCities]=["Spokane","Boston","Los Angeles","Seattle","Portland"]

console.log(first)
// logs Spokane
console.log(fifth)
// logs Portland
console.log(firstCity)
// logs Spokane
console.log(otherCities)
// logs [ 'Boston', 'Los Angeles', 'Seattle', 'Portland' ]
```

## ECMASCRIPT OBJECTS

### Enhancing Object Literals

```js
// old way
function skier(name,sound){
    return {
        name:name,
        sound:sound,
        powderYell:function(){
            let yell= this.sound.toUpperCase();
            console.log(`${yell}! ${yell}!`);
        }
    }
}
skier("Andy","yeah").powderYell(); 

// neuay
function skier(name,sound){
    return {
        name,
        sound,
        powderYell:function(){
            let yell= this.sound.toUpperCase();
            console.log(`${yell}! ${yell}!`);
        }
    }
}
skier("Andy","yeah").powderYell(); 
```

### Creating Objects with Spread Operator

```js
const daytime = {
    breakfast:"oatmeal",
    lunch:"peanut butter and jelly"
};

const nighttime = "mac and cheese"

const backPacking = {
    ...daytime, // will spread the daytime object
    nighttime
}
```

### Destructuring Objects

```js

```
