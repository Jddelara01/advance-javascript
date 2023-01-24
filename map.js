  
// /**
//  * To run this file in Gitpod, use the 
//  * command node map.js in the terminal
//  */

// // Using a for loop
// let nums = [1, 2, 3, 4, 5];
// let results =[];
// for(let num of nums) {
//     results.push(num * 2);
// }

// console.log(results);

// // Using map()
// const multyByTwo = function (num) {
//     return num * 2;
// }

// const mapResults = nums.map(multyByTwo);
// console.log(mapResults);

// // Simplified w/ map()
// const simplified = nums.map(function (num) {return num * 2});
// console.log(simplified);

// // Simplfied w/ map() + arrow function
// const mapSums = nums.map(num => num * 2);
// console.log(mapSums);

// // With objects:
// const students = [
//     {
//       id: 1,
//       name: 'Mark',
//       profession: 'Developer',
//       skill: 'JavaScript'
//     },
//     {
//       id: 2,
//       name: 'Ariel',
//       profession: 'Developer',
//       skill: 'HTML'
//     },
//     {
//       id: 3,
//       name: 'Jason',
//       profession: 'Designer',
//       skill: 'CSS'
//     },
//   ];

// const studentsWithIds= students.map(student => [student.name, student.id]);
// console.log(studentsWithIds);

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
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

let [john, ...rest] = students.map(student => [student.name, student.results]);
console.log(john);
console.log(rest);

// Or create function first and use in map
// const mapper = (itm) => [itm.name, itm.results];
// let [john, ...rest] = students.map(mapper);
// console.log(john);
// console.log(rest);