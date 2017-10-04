// function makeBoard(num) {
//     var board = '';
//     for (var row = 0; row < num; row++) {
//         for (var column = 0; column < num; column++) {
//             if ((column + row) % 2 === 0) {
//                 board += '#';
//             } else {
//                 board += ' ';
//             }
//         }
//         board += '\n';
//     }
//     return board;
// }

// console.log(makeBoard(8));



// one way

// var str = ''
// var num = 10
// for (var i = 1; i < num; i++) {
//     if (i < num) {
//         str += i + ', '
//         console.log(i + ' ' + str.slice(0, -2))
//     }    
// } str += i

// console.log(i + ' ' + str)

// second way

// var str = ''
// var num = 10

// for (var i = 1; i <= num; i++) {
//     if (i > 1) {
//         str += ', '
//     }
//     str += i;
//     console.log(i + ' ' + str);
// }

// odd/even 


// var str 
// var num = 10

// for (var i = 1; i <= num; i+=2) {
//     str = ''
//     for (var j = 1; j <= i; j++) {
//         if (j > 1) {
//             str += ', '
//         }
//         str += j;
//     }
//     console.log(i + ' ' + str);
// }


// var name = 'Andrew'
// if (name.length % 2 === 1) {
//     console.log(name[Math.floor(name.length / 2)])
//     } else {
//         console.log(name.substring(
//             name.length / 2 - 1,
//             name.length / 2 + 1
//         ))
//     }


// function sumFibs(num) {
//     var a = 1
//     var b = 1
//     var c = 0
//     var sum = a + b
//     for (var i = 0; c <= num; i++) {
//         if ( c % 2 === 1 ) {
//             sum += c
//         }
//         c = a + b
//         a = b
//         b = c
//     }
//     return sum
// }
// console.log(sumFibs(14))





// function nameCase(name) {
//     var theRest = name.toLowerCase().trim();
//     var space = theRest.indexOf(' ');
//     var result = '';
//     while (space !== -1) {
//         var part1 = theRest.slice(0, space + 1); // "Barack "
//         theRest = theRest.slice(space + 1);
//         result += part1[0].toUpperCase() + part1.slice(1);
//         space = theRest.indexOf(' ');
//     }
//     result += theRest[0].toUpperCase() + theRest.slice(1);
//     return result;
// }


// function triangle(num) {
//     var str = ''
//     for (var i = 0; i <=num; i++) {
//         str += '#'
//     }
//     return str
// }
// console.log(triangle(5))

// function deepEquals(arr1, arr2){
    
//     if(arr1.length !== arr2.length){
//         return false
//     }
//     for(var i = 0; i < arr1.length; i++){
//         if (arr1[i] !== arr2[i] ){
//             return false
//         }
//     }
//     return true
// }
// console.log(deepEquals([1,2,3,4], [1,2,3,4])) 



// var arr1 = [1,2,3]
// var arr2 = [4,5,6]

// function arrayInsert(a1, a2, where) {
//     for (var i = 0; i < a2.length; i++) {
//         a1.splice(where + i,0,a2[i])
//     }
// }
// arrayInsert(arr1,arr2,arr1.length)
// console.log(arr1)



// function lastToFront(array) {
//     var newArray = []
//     newArray.push(array.pop())
//     for (var i = 0; i < array.length; i++) {
//         newArray.push(array[i])
//     }
//     return newArray
// }
// console.log(lastToFront([1,2,3,4,5,6]))





// function isItPrime(value){
//     var num = 2;
//     if (value < 2){
//         return false; 
//     } 
//         while (num < value){
//             if (value % num === 0){
//                 return false;
//             } else {
//                 return true; 
//             }
//             num++;
//         }
// }

// function sumPrimes(num) {
//   var sum = 2;
//   for (var i = 2;i < num;i++){
//     if (isItPrime(i) === true){
//       sum = sum + 2;
//     }
//   }
  
//   return sum;
// }

// console.log(sumPrimes(10));


// var spinner = '/-\\|'
// var i = 0

// setInterval(function(){
//     console.log('\x1B[2J\x1B[H' + spinner[i])
//     i = ( i + 1) % spinner.length
// }), 10000





// function conservativeSpender(balance) {
//     return balance > 100
// }
    
// function liberalSpender(balance) {
//     return balance > 10
// }
    
// function horribleSaver (balance) {
//     return balance > 0
// }
    
// function shouldIBuyThis (balance , callback) {
//     if (callback(balance)){
//         return ("Sure! I've got the money!")
//     }else {
//         return ("Nope! Gotta keep my savings up!")
//     }
// }
    
// console.log( shouldIBuyThis(101, liberalSpender))
    
// function smarterShouldIBuyThis ( balance , price, callback) {
//     newBalance = balance - price
//     if (callback(newBalance)){
//         return ("Sure! I've got the money!")
//     }else {
//         return ("Nope! Gotta keep my savings up!")
//     }
// }
//     console.log(smarterShouldIBuyThis(59, 50,liberalSpender))







//---------------------------------------------------------


// var readline = require('readline')

// var options = 'list, show n, reserve n, occupancy n max, search amenity'

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// var rooms = [
//     {
//         price: 200,
//         location: '11 Broadway, NY',
//         maxOccupants: 3,
//         amenities: ['washer/dryer', 'wifi', 'cable']
//     },
//     {
//         price: 100,
//         location: '11 Delancey, NY',
//         maxOccupants: 1,
//         amenities: []
//     },
//     {
//         price: 2000,
//         location: '1 Park Pl, NY',
//         maxOccupants: 2,
//         amenities: ['pool', 'valet', 'butler', 'private dog walker & whisperer']
//     },
//     {
//         price: 90000,
//         location: '1 Broad St, NY',
//         maxOccupants: 33,
//         amenities: ['disco ball']
//     },
//     {
//         price: 2000,
//         location: '2312 144th St, NY',
//         maxOccupants: 4,
//         amenities: []
//     },
//     {
//         price: 200000,
//         location: '47-10 Austell Pl, NY',
//         maxOccupants: 200,
//         amenities: ['drill', 'sometimes wifi', 'luna']
//     },
//     {
//         price: 0,
//         location: 'Times Square, NY',
//         maxOccupants: 3,
//         amenities: ['sewage water', 'hagglers', 'naked cowboy', 'wifi']
//     },
//     {
//         price: 200000,
//         location: '1600 Pennsylvania Ave, DC',
//         maxOccupants: 500,
//         amenities: ['nixon\'s bowling', 'orange hairpiece', 'oval office', 'pair of small hands']
//     },
//     {
//         price: 2000000,
//         location: 'Falchi Bldg, NY',
//         maxOccupants: 5000,
//         amenities: ['food truck']
//     },
//     {
//         price: 250,
//         location: 'Washington Pl, NY',
//         maxOccupants: 100,
//         amenities: ['fountain', 'dosa cart']
//     }    
// ];

// // make the string exactly as long as len
// function padTo(str, len) {
//     if (str.length > len) {
//         return str.slice(0, len - 3) + '...'
//     } else {
//         while (str.length < len) {
//             str += ' '
//         }
//         return str;
//     }
// }

// // make the string exactly as long as len
// function padLeft(str, len) {
//     var money = str
//     if (money.length > len) {
//         return money.slice(0, len - 3) + '...'
//     } else {
//         while (money.length < len) {
//             money = ' ' + money
//         }
//         return money;
//     }
// }

// function toMoney(num) {
//     return '$' + num.toString()
// }

// function bulletPoints(list) {
//     return '\n - ' + list.join('\n - ')
// }

// function showDetails(n) {
//     var room = rooms[n]
//     console.log('Details of room #' + (n + 1))
//     console.log('----------------------\n')
//     if (room.reserved) {
//         console.log('[RESERVED]')
//     }
//     console.log('Location:', room.location)
//     console.log('Price:', toMoney(room.price))
//     console.log('Max. Occupancy:', room.maxOccupants)
//     console.log('Amenities:', bulletPoints(room.amenities))
// }

// function reserve(n) {
//     if (rooms[n].reserved) {
//         console.log('Sorry, it\'s already reserved.')
//         return
//     } 
//     rooms[n].reserved = true
//     console.log('Thank you for reserving')
// }

// function occupancy(n, max) {
//     rooms[n].maxOccupants = max
//     console.log('Occupants set.')
// }

// function list(callback) {
//     console.log(
//         padLeft('ID', 2),
//         '...',
//         padTo('Address', 30), 
//         ' ', 
//         padLeft('Price', 8)
//     );
//     for (var i = 0; i < rooms.length; i++) {
//         if (callback(rooms[i])) {
//             var counter = i + 1;
//             console.log(
//                 padLeft(counter.toString(), 2),
//                 '...',
//                 padTo(rooms[i].location, 30), 
//                 ' ', 
//                 padLeft(toMoney(rooms[i].price), 8)
//             );
//         }
//     }
// }

// rl.on('line', function(input) {
//     var inputArr = input.split(' ')
//     if (inputArr[0] === 'list') {
//         list(function (room) {
//             return !room.reserved
//         });        
//     } else if (inputArr[0] === 'show') {
//         showDetails(inputArr[1] - 1)
//     } else if (inputArr[0] === 'reserve') {
//         reserve(inputArr[1] - 1)
//     } else if (inputArr[0] === 'occupancy') {
//         occupancy(inputArr[1] - 1, inputArr[2])
//     } else if (inputArr[0] === 'search') {
//         var amenity = inputArr.slice(1).join(' ')
//         list(function (room) {
//             return !room.reserved && room.amenities.indexOf(amenity) > -1
//         });                
//     } else {
//         console.log('Unknown command: ' + input)
//     }

//     console.log('\n\nPlease chose one of [' + options + '] $')
// })

// console.log('Please chose one of [' + options + '] $')




//--------------------------------------------




var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function clear () {
    process.stdout.write('\u001B[2J\u001B[0;0f')
  }

clear()
var sum = 0
var dif = 0
var mul = 1
var div = 1
rl.on('line', function (input) {
    clear()
    var inputArr = input.split(' ')
    for (var i = 1; i < inputArr.length; i++) {
        if (inputArr[0] === '+') {
            sum += Number(inputArr[i])
            var output = sum
        } else if (inputArr[0] === '-') {
             dif -= Number(inputArr[i]) 
             var output = dif
        } else if (inputArr[0] === '*') {
            mul *= Number(inputArr[i])   
            var output =mul
        } else if (inputArr[0] === '/') {
            div /= Number(inputArr[i])
            var output = div
        } else {
            var output = "The Operation is Invalid"
        }
    }
console.log(output)
console.log("Add a mathematical Operation (+,-,*,/) and two numbers")

})
console.log("Add a mathematical Operation (+,-,*,/) and two numbers")
