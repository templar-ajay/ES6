# ES6 syntax

## ECMAScript Variables and Data Structures

### String Methods

```js
string.startsWith("xyz"); // returns true or false
string.endsWith("xyz"); // returns true or false
string.includes("xyz"); // returns true or false
string.search("xyz"); // returns index of the first instance of xyz in string
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
let course = new Map();

course.set("react", { description: "ui" });
course.set("jest", { description: "testing" });

console.log(course); // returns the map
console.log(course.react || course["react"]); // returns undefined

let details = new Map([
  [new Date(), "today"],
  [2, { javascript: ["js", "node", "react"] }],
  ["items", [1, 2]],
]);

console.log(details);
console.log(details.size);

details.forEach((item) => {
  console.log(item);
}); // logs out items in their insertion order

let detailsObj = {
  3: "hello",
  2: "bye",
};

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
let books = new Set();
books.add("Pride and prejudice");
books.add("War and Peace").add("Oliver Twist");
books.add("War and Peace");

console.log(books); // logs the set of books
console.log(books.size); // logs 3
console.log("has Oliver Twist", books.has("Oliver Twist")); //  logs -> has Oliver Twist true
books.delete("Oliver Twist");
console.log("has Oliver Twist", books.has("Oliver Twist")); //  logs -> has Oliver Twist false

books.map((item) => {
  console.log(item);
}); // books.map is not a function , .map is not available for sets

books.forEach((item) => {
  console.log(item);
}); // for Each is available for sets
```

## Arrays and Array Methods

### Using the array spread operator

```js
let cats = ["biscuit", "Junglee"];
let dogs = ["Stella", "Camper"];

let animals = ["smokie", "Kurama", "neuay", ...cats, ...dogs];
console.log(animals); // logs ["smokie","Kurama","neuay","biscuit","Junglee","Stella","Camper"]
```

### Destructuring Arrays

```js
let [first, , , , fifth] = [
  "Spokane",
  "Boston",
  "Los Angeles",
  "Seattle",
  "Portland",
];
let [firstCity, ...otherCities] = [
  "Spokane",
  "Boston",
  "Los Angeles",
  "Seattle",
  "Portland",
];

console.log(first);
// logs Spokane
console.log(fifth);
// logs Portland
console.log(firstCity);
// logs Spokane
console.log(otherCities);
// logs [ 'Boston', 'Los Angeles', 'Seattle', 'Portland' ]
```

## ECMASCRIPT OBJECTS

### Enhancing Object Literals

```js
// old way
function skier(name, sound) {
  return {
    name: name,
    sound: sound,
    powderYell: function () {
      let yell = this.sound.toUpperCase();
      console.log(`${yell}! ${yell}!`);
    },
  };
}
skier("Andy", "yeah").powderYell();

// neuay
function skier(name, sound) {
  return {
    name,
    sound,
    powderYell: function () {
      let yell = this.sound.toUpperCase();
      console.log(`${yell}! ${yell}!`);
    },
  };
}
skier("Andy", "yeah").powderYell();
```

### Creating Objects with Spread Operator

```js
const daytime = {
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly",
};

const nighttime = "mac and cheese";

const backPacking = {
  ...daytime, // will spread the daytime object
  nighttime,
};
```

### Destructuring Objects

```js
// Object Destructuring
const vacation = {
  destination: "Chile",
  travelers: 2,
  activity: "skiing",
  cost: "so much",
};

function marketing({ destination, activity }) {
  return `come to ${destination} and do some ${activity}`;
}

console.log(marketing(vacation)); // logs come to Chile and do some skiing

// another example
const { title, price } = {
  title: "Jalebi",
  price: "20₹", // rupee sign (right-Alt + 4)
  type: "sweet",
  ingredients: ["sweet", "sweet", "sweet", "sweet"],
};
console.log(title, price); // logs Jalebi 20₹
```

### For/Of loop

```js
for (let letter of "JavaScript") {
  console.log(letter);
}

const topics = ["javaScript", "HTML", "Node", "CSS"];

for (let topic of topics) {
  console.log(topic);
}

const topicRoutes = new Map();

topicRoutes.set("JavaScript", "/topic/JavaScript");
topicRoutes.set("HTML", "/topic/html");
topicRoutes.set("Node", "/topic/Node");
topicRoutes.set("CSS", "/topic/css");

for (let topicRoute of topicRoutes) {
  console.log(topicRoute);
}
for (let topicRoute of topicRoutes.keys()) {
  console.log(topicRoute);
}
for (let topicRoute of topicRoutes.values()) {
  console.log(topicRoute);
}
for (let topicRoute of topicRoutes.entries()) {
  console.log(topicRoute);
}

// logs out
/*
J
a
v
a
S
c
r
i
p
t
javaScript
HTML
Node
CSS
['JavaScript', '/topic/JavaScript']
['HTML', '/topic/html']
['Node', '/topic/Node']
['CSS', '/topic/css']
JavaScript
HTML
Node
CSS
    / topic / JavaScript
    / topic / html
    / topic / Node
    / topic / css
    ['JavaScript', '/topic/JavaScript']
    ['HTML', '/topic/html']
    ['Node', '/topic/Node']
    ['CSS', '/topic/css']
*/
```

### Classes in Js

```js
class Vehicle {
  constructor(description, wheels) {
    this.description = description;
    this.wheels = wheels;
  }
  describeYourself() {
    console.log(`I am a ${this.description} with ${this.wheels} wheels`);
  }
}

let coolSkiVan = new Vehicle("cool Ski Van", 4);
coolSkiVan.describeYourself(); // logs out - I am a cool Ski Van with 4 wheels
```

### Inheritance in Js Classes

```js
class SemiTruck extends Vehicle {
  constructor() {
    super("Semi Truck", 18);
  }
}

let groceryStoreSemiTruck = new SemiTruck();
groceryStoreSemiTruck.describeYourself(); // logs out - I am a Semi Truck with 18 wheels
```

### Getting and Setting Class Values

#### in objects

```js
let attendance = {
  _list: [],

  // setter
  set addName(name) {
    this._list.push(name);
  },

  //getter
  get list() {
    return this._list.join(", ");
  },
};

// using setter
attendance.addName = "John"; //  note this is wrong syntax for setter -> attendance.addName("John")

//using getter
console.log(attendance.list); // logs out - John

// using setter
attendance.addName = "Ajay";
attendance.addName = "xCommand0x";
attendance.addName = "MadManOP";

// using getter
console.log(attendance.list); // logs out - John, Ajay, xCommand0x, MadManOP
```

#### in classes

```js
// in classes
class Hike {
  constructor(distance) {
    this.distance = distance;
  }
  set setPace(pace) {
    this.pace = pace;
  }
  get lengthInHours() {
    return this.pace ? `${this.calcLength()} hours` : "please set a pace first";
  }
  calcLength() {
    return this.distance / this.pace;
  }
}

const mtEverest = new Hike(8.849);

// using setter
mtEverest.setPace = 0.1;

// using getter
console.log(mtEverest.lengthInHours); // logs out 88.49 hours
```

## ECMAScript Functions

### using the string.repeat() function

```js
let yell = "woo!";

let party = yell.repeat(20);

console.log(party);

let dog = {
  hrr(times) {
    console.log("H" + "r".repeat(times));
  },
  bark(times) {
    console.log("Bhow".repeat(times));
  },
  snore(times) {
    console.log("Zzzz".repeat(times));
  },
};

dog.hrr(6); //  logs out -> Hrrrrrr
dog.bark(2); //  logs out -> BhowBhow
dog.snore(6); // logs out -> ZzzzZzzzZzzzZzzzZzzzZzzz
```

### setting default parameters

```js
function add(x = 3, y = 4) {
  return x + y;
}
console.log(add());
console.log(add(10));
console.log(add(10, 20));
```

### Arrow Function

```js
let studentList = (...students) => {
  return students.join(", ");
};

studentList("Ajay", "Ben10", "Naruto");

// we can skip the return statement by skipping the curly braces {} and putting the function in one line
let fruitsList = (...fruits) => fruits.join(", ");

console.log(fruitsList(["apple", "banana", "mango"]));
```

### Understanding this in arrow functions

```js
// old ways of using this - using normal functions - function(){}
let person = {
  first: "Ajay",
  hobbies: ["Chess", "trekking", "Run", "Gym"],
  printHobbies: function () {
    const _this = this;
    this.hobbies.forEach(function (hobby) {
      let string = `${_this.first} loves to ${hobby}`;
      console.log(string);
    });
  },
};

person.printHobbies();

// new method by using arrow functions ()=>{}
person = {
  first: "Ajay",
  hobbies: ["Chess", "trekking", "Run", "Gym"],
  printHobbies: function () {
    this.hobbies.forEach((hobby) => {
      let string = `${this.first} loves to ${hobby}`;
      console.log(string);
    });
  },
};
person.printHobbies();

/* output
Ajay loves to Chess
Ajay loves to trekking
Ajay loves to Run
Ajay loves to Gym
Ajay loves to Chess
Ajay loves to trekking
Ajay loves to Run
Ajay loves to Gym
*/
```

### working with Generators

```js
function* director() {
  yield "three";
  yield "Two";
  yield "One";
  yield "Action";
}

let countdown = director();

console.log(countdown.next());
console.log(countdown.next());
console.log(countdown.next().value);
console.log(countdown.next());
console.log(countdown.next());
/*
{ value: 'three', done: false }
{ value: 'Two', done: false }
One
{ value: 'Action', done: false }
{ value: undefined, done: true }
*/
```

## Asynchronous JavaScript

### Building Promises

```js
const delay = (seconds) =>
  new Promise((resolve, reject) =>
    typeof seconds === "number"
      ? setTimeout(resolve, seconds * 1000)
      : reject(new Error("seconds must be number"))
  );

delay(1).then(() => console.log("one second"));
// logs out- one second

delay("two seconds")
  .then(() => console.log(`two seconds`))
  .catch((err) => console.log(`error ocurred`, err));
// returns an error message- error ocurred Error: seconds must be a number
```

### Loading remote data with promises

```js
const spacePeople = () => {
  return new Promise((resolves, rejects) => {
    const api = "http://api.open-notify.org/astros.json";
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () => {
      request.status === 200
        ? resolves(JSON.parse(request.response))
        : rejects(Error(request.statusText));
    };
    request.onerror = (err) => {
      rejects(err);
    };
    request.send();
  });
};

spacePeople()
  .then((spaceData) => {
    console.log(spaceData);
  })
  .catch((err) => {
    console.log(err);
  });
```

### Returning Promises with Fetch

```js
let getSpacePeople = () =>
  fetch("http://api.open-notify.org/astros.json").then((res) => res.json());

let getSpaceNames = () =>
  getSpacePeople()
    .then((json) => json.people)
    .then((people) => people.map((p) => p.name))
    .then((namesArr) => namesArr.join(", "))
    .then(console.log); // smaller syntax of "names => console.log(names)"

getSpaceNames();
// logs out- Oleg Artemyev, Denis Matveev, Sergey Korsakov, Kjell Lindgren, Bob Hines,
//  Samantha Cristoforetti, Jessica Watkins, Cai Xuzhe, Chen Dong, Liu Yang
```

### Using Async / Await

```js
const delay = (seconds) =>
  new Promise((resolves) => setTimeout(resolves, seconds * 1000));
const countToFour = async () => {
  console.log("zero seconds");
  await delay(1);
  console.log(`1 second`);
  await delay(2);
  console.log(`3 seconds`);
  await delay(1);
  console.log(`4 seconds`);
};

countToFour();
// logs out "zero seconds" instantly, waits 1 second and logs out "1 second", waits 2 more seconds and logs out "3 seconds", waits 1 more second and logs out "4 seconds"
```

### incorporating Fetch with Async Await

```js
const githubRequest = async (userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  const json = await response.json();
  console.log(`${json.name} works at ${json.company}`);
};
githubRequest("templar-command0");
// logs out "command0 works at null" , cuz I haven't updated it on github
```

## Useful links

- [ECMAScript github profile](https://github.com/tc39)
