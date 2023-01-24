// /**
//  * To run this file in Gitpod, use the 
//  * command node destructuring.js in the terminal
//  */

// // Destructuring arrays
// let ages = [30, 26, 27];
// // let john = ages[0];
// // let mary = ages[1];
// // let joe = ages[2];

// // destructuring
// let [john, mary, joe] = ages;

// console.log(john, mary, joe);

// // Destructuring objects
// let jobs = {
//     mike: "designer",
//     jill: "developer",
//     alicia: "accountant",
// };

// let {mike, jill, alicia} = jobs;
// console.log(mike, jill, alicia);

// // Destructuring subsets
// let languages = ["english", "french", "spanish", "german", "japanese"];
// let [johnNative, johnSecondary] = languages;
// console.log(johnNative, johnSecondary);

// let [, , maryNative, marySecondary] = languages;
// console.log(maryNative, marySecondary);

// let languages2 = {
//     firstLanguage: "english",
//     secondLanguage: "french",
//     thirdLanguage: "spanish",
//     fourthLanguage: "german",
// };
// let {firstLanguage, thirdLanguage} = languages2;
// console.log(firstLanguage, thirdLanguage);

// // Using rest parameter syntax
// let fruits = ["apple", "orange", "banana", "peach", "cherry"];
// let [favourite, secondFavourite, ...others] = fruits;
// console.log("Favourite: ", favourite);
// console.log("Second Favourite: ", secondFavourite);
// console.log("Others: ", others);


// let favouriteFoods = {
//     brian: "pizza",
//     anna: "pasta",
//     sarah: "vegetarian",
//     andrea: "steak",
// };

// let {brian, anna, ...rest} = favouriteFoods;
// console.log("Brian's favourite is ", brian);
// console.log("Anna's favourite is ", anna);
// console.log("For the rest of them, ", rest);

let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const makeList = (arr, student) => {
    for(let val of arr) {
        if(val.name == student) {
            return val.subjects
        }
    }
}

let [first, second, ...rest] = makeList(students, "John");
console.log(first);
console.log(second);
console.log(rest);