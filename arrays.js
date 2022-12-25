// EXE 1
let numbers = [1, 2, 3, 4];

let numbers2 = [4, 5, 6, 7, 8, 9, 10];
// 1
function arrayRemove(array){
    array = array.slice(1, -1);
    return array;
}
console.log(arrayRemove(numbers));

// 2
let words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
function arrayAddWord(array, beginig, end){
    let a = array.unshift(beginig);
    let b = array.push(end);
    return array;
}

console.log(arrayAddWord(words, 'test', 'check'));

// 3
function findingFive(array){
    if (array.includes(5)){
        return true;
    } else {
        return false;
    }
}
console.log(findingFive(numbers));
console.log(findingFive(numbers2));

// 4
function conactingArrays(array1, array2){
    arraysconact = array1.concat(array2);
    return arraysconact;
}
console.log(conactingArrays(numbers, numbers2));

// 5
function findingNum(array, n){
    if (array.includes(n)){
        return true;
    } else {
        return false;
    }
}
console.log('finding num ' + findingNum(numbers2, 9));

// 6
function  occurrence(array, s){
    let where = array.indexOf(s);
    return where;
}

console.log(occurrence(words, 'two'));

// 7
// function reverseArray(array){
//     let resulte = array.reverse();
//     return resulte;
// }
// console.log(reverseArray(words));

// 8
function reverseArrayUp(array){
    if (5 < array.length < 10){
        let resulte = array.reverse();
        return resulte;
    }
}
console.log('between 5 to 10 ' + reverseArrayUp(words));

// 9
let numbers3 = [1, 2, 3, 4, 5, 6, 7];
// function messArray(array, n){
//     if (array.includes(n)){
//        array.shift();
//         return array.reverse();
//     }else {
//     return array;
// }
// }
// console.log('messArray' + messArray(numbers3, 3));

// 10
function cloneArray(array){
    newArray = [...array];
    return newArray;
}

// console.log(cloneArray(numbers3));

// 11
function firstIndex(array, n = 1){
    return array.slice(0, n)
}
console.log(firstIndex(numbers,));

// 12

function lasttIndex(array, n = 1){
    return array.slice(-n)
}
console.log(lasttIndex(numbers3,2));

// 13
let therteen = [];
// let therteen = [1, 2, 3, 4, 5, 1];
function equalEdges(array){
    if(array[0] === array.at(-1)){
        return true;
    } else {
        return false
    }
}
console.log('equal' + equalEdges(therteen));

// 14
function howManyBetween(array){
    if (array[0] === array.at(-1) && array.length > 1){
        let length = array.length - 2;
        console.log('true! ' + array.length); 
        return true;
    } else {
        console.log('false');
        return false;
    }
}
console.log(howManyBetween(therteen));

// EX 2

// 1
let weirdArray = ['Inception', 'Spiderman', 'tuesday'];
let weirderArray = ['green', 'Saturday', 'Friday', 'Wednesday'];
let movies = [];
let colors = [];

weirderArray.reverse();
veryWeird = weirdArray.concat(weirderArray);
console.log(veryWeird);
movies[0] = veryWeird.shift();
movies[1] = veryWeird.shift();
console.log(movies)
veryWeird.unshift('Monday');
colors[0] = veryWeird.splice(5, 1)
veryWeird.push('Sunday');
veryWeird.splice(3, 3,'Thursday', 'friday', 'saturday', 'sunday');
weekend = veryWeird.splice(5, 2);
console.log(veryWeird);
console.log(weekend);


// EX 3
// 1
practiceFile = [273.15];
practiceFile.push('a');
practiceFile.push('b');
practiceFile.push(42);
practiceFile.push('hello');
practiceFile.push([false, -4.6, '87']);
console.log('practice: ' + practiceFile);
// 2
cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket']
cargoHold[cargoHold.indexOf('slinky')] = 'space tether';
console.log(cargoHold.pop() + cargoHold);
console.log(cargoHold.shift() + cargoHold);
cargoHold.unshift(1138);
cargoHold.push('20 meters');
console.log(`the final array is: ${cargoHold}, its length is: ${cargoHold.length}`);
// 3
cargoHold.splice(3, 0, 'keys');
cargoHold.splice(cargoHold.indexOf('instruction manual'), 1);
console.log('test' + cargoHold);
cargoHold.splice(2, 3, 'cat', 'fob', 'string cheese');
console.log(cargoHold);

// 4
holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23]
holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip']
holdTogether = console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);
console.log('slice ' + holdCabinet1.slice(2, 4));
console.log(holdCabinet1)
console.log('reverse ' + holdCabinet1.reverse());
console.log('sort ' + holdCabinet2.sort());

let str =  'In space, no one can hear you code.'
console.log('split ' + str.split())
console.log('split e ' + str.split('e'))
console.log('split rek ' + str.split(' '))

arr = ['B', 'n', 'n', 5];
console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(''));
console.log(arr.join(' '));

console.log(typeof arr);
console.log(typeof str);

// EX 4
// let numbers_1 = [1, 2, 3, 4, 5];
// let numbers_2 = numbers_1;
// numbers_1.push(6);
// console.log(numbers_1);
// console.log(numbers_2);

let numbers_1 = [1, 2, 3, 4, 5];
numbers_2 = numbers_1.slice(0, 5)
numbers_1.push(6);
console.log(numbers_1);
console.log(numbers_2);

chimicalSymbol = [['hydrogen', 'H', 1.008],['helium', 'He', 4.003],['iron', 'Fe', 55.85]];


let table = '<table><tr>';
let cells = 3;
let value = chimicalSymbol[i];
chimicalSymbol.forEach(value, i => {
   table += `<TD>${value}</TD>`;
   let a = i + 1;
   if (a % cells == 0 && a != array.length){
    table += '</tr><tr>';
   } 
});

document.belittlement('container').innerHTML = table;