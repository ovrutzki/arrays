// // EXE 1
// let numbers = [1, 2, 3, 4];

// let numbers2 = [4, 5, 6, 7, 8, 9, 10];
// // 1
// function arrayRemove(array){
//     array = array.slice(1, -1);
//     return array;
// }
// console.log(arrayRemove(numbers));

// // 2
// let words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
// function arrayAddWord(array, beginig, end){
//     let a = array.unshift(beginig);
//     let b = array.push(end);
//     return array;
// }

// console.log(arrayAddWord(words, 'test', 'check'));

// // 3
// function findingFive(array){
//     if (array.includes(5)){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(findingFive(numbers));
// console.log(findingFive(numbers2));

// // 4
// function conactingArrays(array1, array2){
//     arraysconact = array1.concat(array2);
//     return arraysconact;
// }
// console.log(conactingArrays(numbers, numbers2));

// // 5
// function findingNum(array, n){
//     if (array.includes(n)){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log('finding num ' + findingNum(numbers2, 9));

// // 6
// function  occurrence(array, s){
//     let where = array.indexOf(s);
//     return where;
// }

// console.log(occurrence(words, 'two'));

// // 7
// // function reverseArray(array){
// //     let resulte = array.reverse();
// //     return resulte;
// // }
// // console.log(reverseArray(words));

// // 8
// function reverseArrayUp(array){
//     if (5 < array.length < 10){
//         let resulte = array.reverse();
//         return resulte;
//     }
// }
// console.log('between 5 to 10 ' + reverseArrayUp(words));

// // 9
// let numbers3 = [1, 2, 3, 4, 5, 6, 7];
// // function messArray(array, n){
// //     if (array.includes(n)){
// //        array.shift();
// //         return array.reverse();
// //     }else {
// //     return array;
// // }
// // }
// // console.log('messArray' + messArray(numbers3, 3));

// // 10
// function cloneArray(array){
//     newArray = [...array];
//     return newArray;
// }

// // console.log(cloneArray(numbers3));

// // 11
// function firstIndex(array, n = 1){
//     return array.slice(0, n)
// }
// console.log(firstIndex(numbers,));

// // 12

// function lasttIndex(array, n = 1){
//     return array.slice(-n)
// }
// console.log(lasttIndex(numbers3,2));

// // 13
// let therteen = [];
// // let therteen = [1, 2, 3, 4, 5, 1];
// function equalEdges(array){
//     if(array[0] === array.at(-1)){
//         return true;
//     } else {
//         return false
//     }
// }
// console.log('equal' + equalEdges(therteen));

// // 14
// function howManyBetween(array){
//     if (array[0] === array.at(-1) && array.length > 1){
//         let length = array.length - 2;
//         console.log('true! ' + array.length); 
//         return true;
//     } else {
//         console.log('false');
//         return false;
//     }
// }
// console.log(howManyBetween(therteen));

// // EX 2

// // 1
// let weirdArray = ['Inception', 'Spiderman', 'tuesday'];
// let weirderArray = ['green', 'Saturday', 'Friday', 'Wednesday'];
// let movies = [];
// let colors = [];

// weirderArray.reverse();
// veryWeird = weirdArray.concat(weirderArray);
// console.log(veryWeird);
// movies[0] = veryWeird.shift();
// movies[1] = veryWeird.shift();
// console.log(movies)
// veryWeird.unshift('Monday');
// colors[0] = veryWeird.splice(5, 1)
// veryWeird.push('Sunday');
// veryWeird.splice(3, 3,'Thursday', 'friday', 'saturday', 'sunday');
// weekend = veryWeird.splice(5, 2);
// console.log(veryWeird);
// console.log(weekend);


// // EX 3
// // 1
// practiceFile = [273.15];
// practiceFile.push('a');
// practiceFile.push('b');
// practiceFile.push(42);
// practiceFile.push('hello');
// practiceFile.push([false, -4.6, '87']);
// console.log('practice: ' + practiceFile);
// // 2
// cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket']
// cargoHold[cargoHold.indexOf('slinky')] = 'space tether';
// console.log(cargoHold.pop() + cargoHold);
// console.log(cargoHold.shift() + cargoHold);
// cargoHold.unshift(1138);
// cargoHold.push('20 meters');
// console.log(`the final array is: ${cargoHold}, its length is: ${cargoHold.length}`);
// // 3
// cargoHold.splice(3, 0, 'keys');
// cargoHold.splice(cargoHold.indexOf('instruction manual'), 1);
// console.log('test' + cargoHold);
// cargoHold.splice(2, 3, 'cat', 'fob', 'string cheese');
// console.log(cargoHold);

// // 4
// holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23]
// holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip']
// holdTogether = console.log(holdCabinet1.concat(holdCabinet2));
// console.log(holdCabinet1);
// console.log('slice ' + holdCabinet1.slice(2, 4));
// console.log(holdCabinet1)
// console.log('reverse ' + holdCabinet1.reverse());
// console.log('sort ' + holdCabinet2.sort());

// let str =  'In space, no one can hear you code.'
// console.log('split ' + str.split())
// console.log('split e ' + str.split('e'))
// console.log('split rek ' + str.split(' '))

// arr = ['B', 'n', 'n', 5];
// console.log(arr.join());
// console.log(arr.join('a'));
// console.log(arr.join(''));
// console.log(arr.join(' '));

// console.log(typeof arr);
// console.log(typeof str);

// // EX 4
// // let numbers_1 = [1, 2, 3, 4, 5];
// // let numbers_2 = numbers_1;
// // numbers_1.push(6);
// // console.log(numbers_1);
// // console.log(numbers_2);

// let numbers_1 = [1, 2, 3, 4, 5];
// numbers_2 = numbers_1.slice(0, 5)
// numbers_1.push(6);
// console.log(numbers_1);
// console.log(numbers_2);

// let element1 = ['hydrogen', 'H', 1.008]
// let element2 = ['helium', 'He', 4.003]
// let element26 = ['iron', 'Fe', 55.85]

// let table = [];




// // let table = '<table><tr>';
// // let cells = 3;
// // let value = chimicalSymbol[i];
// // chimicalSymbol.forEach(value, i => {
// //    table += `<TD>${value}</TD>`;
// //    let a = i + 1;
// //    if (a % cells == 0 && a != array.length){
// //     table += '</tr><tr>';
// //    } 
// // });

// // document.belittlement('container').innerHTML = table;

// let sumeven = 0;
// for (let i = 0; i <= 10; i +=2){
//     sumeven += i;
// }
// console.log('test ' + sumeven);

// let i = 0;
// while (i < 11 ){
//     console.log(i);
//     i += 1;
// }
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// Dimensional Arrays & More Arrays 27/12/22

// EX0

// let matrix = [
//     ['Sunday', 'noon', 'pizza'],
//     ['wednsday', 'evening', 'soup'],
//     ['Saterday', 'morning', 'Mosley']
// ];

// function printMatrix(array) {
//     for (let i = 0; i < array.length; i++) {
//         let element = array[i];
//         console.log(element.join(' '))
//     }};
// printMatrix(matrix);
// --------------------------------------------------------
// EX1
// debugger;
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// function sumOfColumns(array) {
//     let columnsSum = [];
//     for (i = 0; i < array.length; i++) {
//             let sum = 0;
//             let rowlength = matrix[i].length;
//             for (let j = 0; j < rowlength; j++) {
//             //    console.log(array[j][i]);
//             sum += array[j][i];
//         }  
//         columnsSum.push(sum);

//         }   
//        return columnsSum;
//     }     
// console.log(sumOfColumns(matrix));

// --------------------------------------------------------
// EX2
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// let newArray = [];
// function smallestInRow(array){
//     smallest = 0;
//     for (let i = 0; i < array.length; i++) {
//         row = array[i];
//         for (let j = 0; j < row.length; j++) {
//             smallest = Math.min.apply(Math, row);
//             console.log(smallest);
//         }    
//         newArray.push(smallest);
//     }
// }
// smallestInRow(matrix);
// console.log(newArray);

// --------------------------------------------------------
// EX4

// messArray = ["b", 22, "z", "q", 100, 2];
// let newArray = [];
// function sortTheArray(array){
//     let nums =[];
//     let letters = [];
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === typeof 0) {
//             nums.push(array[i]);
//         } else {
//             letters.push(array[i]);
//         }
//         nums.sort(function(a,b){return a-b});
//         letters.sort(); 
//     }

//     let sortArray = nums.concat(letters);
//     console.log(sortArray);
// }
// sortTheArray(messArray);

// --------------------------------------------------------
// // EX5
// let array1 = [1, 2, 3, 4, 5, 6, 7];
// let shuffle = array1.sort(function() {
// return Math.random() - 0.5;
    
// });

// console.log(shuffle);

// --------------------------------------------------------
// EX6
// debugger;
// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 1000);
// }

// --------------------------------------------------------
// EX7
// let b = " ";
// let a = "";
// for (let i = 0; i < 5; i++) {
//     let newstr = b.padEnd(1 + i, ' ');
//     for (let j = 0; j < 5; j++) {
//         if (i + j % 2 === 0) {
//             a += '*'
//         } else {
//             a += " "
//         }
//     }
//     console.log(newstr + a);
// }

// --------------------------------------------------------
// EX8
// let b = " ";
// let a = "* * * * * *";
// let newstr = '';
// for (let i = 10; i > 0; i-=2) {
//     newstr = a.slice(0, i);
//     for (let j = 0; j < 5; j++) {
//         fainle = newstr.padStart(6 + j, ' ')
//     }
//     console.log(fainle);
// }

// --------------------------------------------------------
// Array Methods
// EX2
// 1
// const z = [1,2,3,4,5];
// const twoXz = z.map((num) => num*2);
// console.log(twoXz); 

// // 2
// // const ages = [12, 4, 5, 88];
// // const srtAges = ages.map((age) => `${age}`);
// // console.log(srtAges); 

// // 3
// function capitalize(word){
//     const separate = word.toUpperCase();
//     // const capital = separate.map((l) => l.UpperCase());
//     // const together = capital.join()
//     console.log(separate);
// }

// capitalize('hello');

// // 4
// const employees = [
//     {name: 'John', age: 25},
//     {name: 'Jane', age: 30},
//     {name: 'Bob', age: 35}
//     ];

//     const employeeName = employees.map((names, x) => names = employees[x].name);
//     console.log(employeeName);

//     // 4
//     const numbers = [1,2,3,4];
//     const multipliedArray = numbers.map((num, x) => num*x)
//     console.log(multipliedArray);

//     // 5
//     const input = [
//         {
//             name: 'jhon',
//             age: 13
//         },
//         {
//             name: 'mark',
//             age: 56
//         },
//         {
//             name: 'rachel',
//             age: 45
//         },
//         {
//             name: 'nate',
//             age: 67
//         },
//         {
//             name: 'jeniffer',
//             age: 65
//         },
//     ];

//     const ages = input.map((age, x) => age = input[x].age);
//     console.log(ages);
//     const newAges = [Math.min(...ages),Math.max(...ages),Math.max(...ages)-Math.min(...ages)]
    
//     console.log(newAges);
    
// 1
const nums = [1, 2, 3];
let sum = 0;
 nums.forEach((num) => sum += num);
console.log(sum);

// 2
// A
function doubleValues(array){
array.forEach((num) => console.log(num*2));
}
doubleValues([1,2,3])

// 3
// A
const words = ['hello', 'world', 'good', 'day'];
// const test = words.map((word) => word.replace(/a|e|i|u|o/gi,'x'));
// console.log(test);

// 4
const employees = [
    { name: "John", age: 30,  isClubMember: true },
    { name: "Jane", age: 15,  isClubMember: false },
    { name: "Bob", age: 35,  isClubMember: true },
   ];

   function checkAge(array){
    array.forEach((age, x) => {
        if(employees[x].age < 20){
            console.log(`${employees[x].name} at index ${x} is too young.`);
        }
    })

   };
   
   
   function updateEmployees(array) {
       array.forEach((age, x) => {
           if(employees[x].age > 25){
               employees[x].isAdult = true;
               console.log(employees[x]);
            } else{
                employees[x].isAdult = false;
            }
        })
        
    };
    checkAge(employees);
   updateEmployees(employees);
   console.log(employees);

//    EX3 - filter Practice
// 1
let a = [1, 2, 3, 4, 5, 6, 24];
const even = a.filter(num => num%2 === 0);
console.log(even);

// 2
const str = ['qwer','wsxecr','swedrfgtyh', 'asd','zasxdcfvgbh']
function fiveAndGreaterOnly (array) {
    const fiveAndGreater = array.filter(word => word.length > 4)
    console.log(fiveAndGreater);
};

fiveAndGreaterOnly(str);

// 3
function filterClubMembers(array) {
    const isMember = array.filter(person => person.isClubMember)
    console.log(isMember);
}

filterClubMembers(employees);

// EX3 - find Practice
// 1
const array1 = [5, 12, 8, 130, 44];
const aboveTen = array1.find(num => num > 10);
console.log(aboveTen);

// 2
const students = [ 
    { name: 'John', age: 22 },
      { name: 'Jane', age: 23 },
      { name: 'Bob', age: 24 },
      { name: 'Alice', age: 25 }
   ]
// A
//    function findStudent (students, test) {
//    const studentName = students.find(student => student.name===test);
//     console.log(studentName);
//    };
//    findStudent(students, 'Bob');

   function olderThan23 (array) {
   const older = array.find(student => student.age > 23);
    console.log('olderThan23', older);
   };
   olderThan23(students);

//    EX3 - reduce Practice
// 1

const input2 = [-1, 4, 12, 0, -3, -29, -150];
const test = input2.reduce((sum, num) => num > 0 ? sum +num : sum + 0 , 0)
console.log(test);

// 2
function calcFactorial(x){
    let array = [];
    array.length = x + 1;
    for (let i = 0; i < array.length ; i++){
        array[i]=i
    }
    console.log(array);
    const Factorial = array.reduce((sum,num) => num > 0 ? num*sum : sum*1 , 1);
    console.log(Factorial);
}
calcFactorial(6);

// 3
// const findOldest = students.reduce((sum, {age}) =>{
//     if ({age} > sum) return {age};
//     return sum
// },students.age);
// console.log(findOldest);    

// 4

