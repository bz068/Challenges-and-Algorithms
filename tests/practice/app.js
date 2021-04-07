// fix the input string, reverse and contenate the input strings
// function myFunction(x, y) {
//   let c;
//   let d;
//   let a;
//   if (x.includes("%")) {
//     d = x.replace("%", "");
//   } else {
//     d = x;
//   }
//   if (y.includes("%")) {
//     a = y.replace("%", "");
//   } else {
//     a = y;
//   }
//   let b = a.split("");
//   b.reverse();
//   c = b.join("");
//   d = d.charAt(0).toUpperCase() + d.slice(1);

//   return d + c;
// }

// console.log(myFunction("java", "tpi%rcs"));

// #################################################################
// check if x is divisible by y.

// function myFunction(x, y) {
//   if (x < 0) return 0;
//   if (x % y === 0) {
//     return x;
//   } else {
//     return x + y - 1;
//   }
// }

// #################################################################
// output array of whole number.

// function myFunction(x) {
//   var output = [],
//     sNumber = x.toString();

//   for (var i = 0, len = sNumber.length; i < len; i += 1) {
//     output.push(+sNumber.charAt(i));
//   }
//   return output;
// }

// ###################################################################
// check if number is prime and if it aint return the next prime

// function isPrime(n) {
//   if (n === 1) {
//     return false;
//   } else if (n === 2) {
//     return true;
//   } else {
//     for (var x = 2; x < n; x++) {
//       if (n % x === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// function myFunction(x) {
//   let found = false;
//   let f = x;
//   const r = isPrime(x);
//   if (r) {
//     return x;
//   } else {
//     while (!found) {
//       f++;
//       if (isPrime(f)) {
//         found = true;
//       }
//     }
//     return f;
//   }
// }

//################################################################
// return the average of array number

// function myFunction(arr) {
//   let r = 0;
//   for (let i = 0; i < arr.length; i++) {
//     r += arr[i];
//   }
//   return r / arr.length;
// }

// console.log(myFunction([-50, 0, 50, 200]));

// #################################################################
// check if all elements of array are the same.

// function myFunction(arr) {
//   let r;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[0] === arr[i]) {
//       r = true;
//     } else {
//       r = false;
//     }
//   }
//   return r;
// }

// console.log(myFunction([1, 1, 1, 2]));

// ##################################################################
// return the last n array elements.

// function myFunction(arr, x) {
//   if (x > arr.length) return arr;
//   let l = arr.length - x;
//   let r = arr.slice(l);
//   return r;
// }

// console.log(myFunction([1, 2, 3, 4, 5], 2));

// #################################################################
// return the longest string from array.

// function myFunction(arr) {
//   const reducer = (a, b) => {
//     return a.length > b.length ? a : b;
//   };
//   return arr.reduce(reducer, "");
// }

// or
// function myFunction( input ) {
//     return input.reduce((a, b) => a.length <= b.length ? b : a)
//     }

// console.log(myFunction(["I", "need", "candy"]));

// #################################################################
// remove specific item from array;

// function myFunction(arr, x) {
//   let r = arr.filter((a, index) => {
//     return arr[index] !== x;
//   });
//   return r;
// }

// // or
// function myFunction( arr, value ) {
//     return arr.filter(cur => cur !== value)
//   }

// console.log(myFunction([1, 2, 3], 2));

// ##################################################################
// Sum up all array elements with values greater than specific value.

// function myFunction(arr, x) {
//   let ar = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > x) ar.push(arr[i]);
//   }
//   console.log(ar);

//   return ar.reduce((a, b) => {
//     return a + b;
//   }, 0);
// }

// console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2));
// console.log(myFunction([-10, -11, -3, 1, -4], -3));

// ##################################################################
// Merge N number of arrays.

// function myFunction() {
//   let d = [];
//   for (var i = 0; i < arguments.length; i++) {
//     d = d.concat(arguments[i]);
//   }
//   return d;
// }

// or
// function myFunction( ...arrays ) {
//     return arrays.flat()
//     }

// console.log(myFunction([1, 2, 3], [4, 5, 6]));
// console.log(myFunction([true, true], [1, 2], ["a", "b"]));

//###########################################################################################
//Merge two arrays with duplicate values

// function myFunction(...arrays) {
//   let arr = arrays.flat();
//   arr = arr.sort((a, b) => a - b);
//   return arr.filter((a, b) => arr.indexOf(a) === b);
// }
// console.log(myFunction([1, 2, 3], [3, 4, 5]));
// console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

// ###########################################################################################
// swap object keys and values

// function myFunction(json) {
//   var ret = {};
//   for (var key in json) {
//     ret[json[key]] = key;
//   }
//   return ret;
// }

// console.log(
//   myFunction({ bear: "animal", sow: "female", boar: "male", cub: "young" })
// );

// ###########################################################################################
// fix error in the second object and add two objects together. MERGE
// function myFunction(obj, obj1) {
//   obj1["city"] = obj1["country"];
//   return (x = { ...obj, ...obj1 });
// }

// console.log(
//   myFunction(
//     { continent: "North America", country: "USA" },
//     { planet: "Earth", country: "Los Angeles", state: "California" }
//   )
// );

// ###########################################################################################
// extract wanted elements from object.

// function myFunction(obj) {
//   const { fn, ln, size, weight } = obj;
//   if (!size && !weight) {
//     return { fn, ln };
//   }
//   x = size ? size.toString() : size;
//   y = weight ? weight.toString() : weight;

//   x = x + "cm";
//   y = y + "kg";
//   if (!size) {
//     return { fn, ln, weight: y };
//   } else if (!weight) {
//     return { fn, ln, size: x };
//   } else {
//     return { fn, ln, size: x, weight: y };
//   }
// }

// console.log(
//   myFunction({
//     fn: "Martin",
//     ln: "Harper",
//     age: 26,
//     email: "martin.harper@test.de",
//     size: 50,
//   })
// );
// ###########################################################################################
//find keys with empty strings and replcae them with null.

// function myFunction(obj) {
//   for (key in obj) {
//     console.log(key);
//     if (obj[key] === "" || obj[key] === " ") {
//       obj[key] = null;
//     }
//   }
//   return obj;
// }
// console.log(myFunction({ a: "a", b: "b ", c: "" }));

// ###########################################################################################
// check if two dates are on the same day;

// function myFunction(x, y) {
//   let day = x.getDay();
//   let yday = y.getDay();
//   if (day === yday) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(myFunction(new Date("2000/01/01"), new Date("2000/01/01")));

// ###########################################################################################
// cehck of two dates are the same;

// function myFunction(a, b) {
//   a = new Date(a);
//   b = new Date(b);
//   if (a.getTime() === b.getTime()) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(
//   myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
// );

// ###########################################################################################
// check if date a is eariler than date b;

// function myFunction(obj) {
//   const { a, b } = obj;
//   return a.getTime() < b.getTime();
// }

// console.log(
//   myFunction({
//     a: new Date("2000/01/01 08:00:00"),
//     b: new Date("2000/01/01 08:45:00"),
//   })
// );

// ###########################################################################################
// check if two dates are within 1hr of each other;

// function myFunction(a, b) {
//   let hr = 60 * 60 * 1000;
//   return (b - a <= hr);
// }

// // or
// function myFunction( a, b ) {
//     return Math.abs( a - b) / 1000 / 60 <= 60
//  }

// console.log(
//   myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 09:45:00"))
// );

// ###########################################################################################
//time different between date a and date b;

// function myFunction(a, b) {
//   let x = Math.abs(a.getHours() - b.getHours());
//   let m = Math.abs(a.getMinutes() - b.getMinutes());
//   let n = Math.abs(a.getSeconds() - b.getSeconds());
//   return { hr: x, min: m, sec: n };
// }

// console.log(
//   myFunction(new Date("2000/01/01 11:04:12"), new Date("2000/01/01 08:00:00"))
// );
// ##########################################################################################
// add n number of days to string.

// function myFunction(a) {
//   let x = a["daysToAdd"] * 86400;
//   return a["date"].setDate(a["date"].getDate() + a["daysToAdd"]);
// }

// // or
// function myFunction({ date, daysToAdd }) {
//     const currentDays = date.getDate();
//     return date.setDate(currentDays + daysToAdd)
//   }

// console.log(
//   myFunction({ date: new Date(Date.UTC(2000, 01, 01)), daysToAdd: 31 })
// );

// function myFunction(num) {
//   const x = num.toString();
//   const y = x.split("");
//   return y;
// }
// console.log(myFunction(10777777));

// function func() {
//   let c = 0,
//     t = 0;

//   while (c < 3) {
//     let x = c;
//     c = c + 1;
//     t = t + x + c;
//   }
//   console.log(t);
// }

// func();

// ##########################################################################################
//sets
// const arr = [1, 2, 3, 3, 2, 4, 4, 5, 4, 6, 7, 8, 7, 9];

// let set = new Set(arr);

// // console.log(set.size);
// set.add(0);
// set.add(15);
// set.delete(1);

// set.forEach((s) => console.log(s));

// const array = new Array(...set);
// console.log(array.sort((a, b) => a - b));

// ##########################################################################################
//REGEX

// checksum
// const str = "AB765456765";
// const re = /[A-Z]{2}\d{9}/;

// let result = str.match(re);
// let r = re.test(str);

// console.log(result);
// console.log(r);

// password regex

// password should be at least 8 char long folloed by a special car and numbers.
// const password = "javascript@1";
// const re = /\w{8,}\W{1}\d{1,}/g;

// let result = re.test(password);
// console.log(result);

//###########################################################################################
// reduce array
const arr = [2, 3, 2];

console.log(arr.reduce((total, c) => (total += c), 0));

//################################################################################################
function run(N, M) {
	let sequence = []
	for(let i = N; i<M;i++){
		if(i % 3 === 0|| i%5 ===0){
			squence.push("FizzBuzz");
		}elseif(i%5 ===0){
			sequence.push("Buzz")
		}elseif(i%3===0){
			sequence.push("Fizz")
		}else{
			sequence.push(i)
		}
	}
		
	return sequence;
	}