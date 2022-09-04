// const id = Symbol()

// const bookObj = {
//     title: "JavaScript",
//     topics: ["strings", "arrays", "objects"],
//     id: "the-javascript-book"
// }
// bookObj[id] = 412336
// console.log(bookObj)

// let course = new Map()

// course.set("react", { description: "ui" })
// course.set("jest", { description: "testing" })

// console.log(course); // returns the map
// console.log(course.react || course["react"]); // returns undefined

// let details = new Map([
//     [new Date(), "today"],
//     [2, { javascript: ["js", "node", "react"] }],
//     ["items", [1, 2]]
// ])

// console.log(details);
// console.log(details.size);

// details.forEach(item => {
//     console.log(item);
// })// logs out items in their insertion order

// let detailsObj = {
//     3: "hello",
//     2: "bye"
// }

// for (item in detailsObj) {
//     console.log(item, detailsObj[item]);
// } // logs out items in ascending order


// let [first, , , , fifth] = ["Spokane", "Boston", "Los Angeles", "Seattle", "Portland"]
// let [firstCity, ...otherCities] = ["Spokane", "Boston", "Los Angeles", "Seattle", "Portland"]

// console.log(first)
// console.log(fifth)
// console.log(firstCity)
// console.log(otherCities)

// const daytime = {
//     breakfast: "oatmeal",
//     lunch: "peanut butter and jelly"
// };

// const nighttime = "mac and cheese"

// // old way
// // const backPacking = {
// //     ...daytime, // will spread the daytime object
// //     nighttime: nighttime
// // }

// // new way
// const backPacking = {
//     ...daytime, // will spread the daytime object
//     nighttime
// }
// console.log(`backPacking`, backPacking);

