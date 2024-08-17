// console.log("hello");
// let firstName = "Jonas";

// firstName = "Jake";

// console.log(firstName);

// // Two values
// // 1. Object 2. Primitives

// //const ageJonas = 2037-1991;
// //const ageSarah = 2037-1991
// //console.log(ageJonas,ageSarah);

// const str = "hello";
// const str2 = "there";

// console.log(str + " " + str2);
// console.log(`${str} ${str2}`);

// let x = 10 + 5;

// console.log((x += 10)); //x=x+10
// console.log((x *= 4)); // x=x*4
// console.log(++x);

// console.log(1 > 2); // false

// // mdn operator precedence
// console.log(2037 - 1991 > 2037 - 2018);

// let z, y;
// z = y = 25 - 10 - 5; // x = y = 10
// console.log(z, y); // assignment executes right to left

//y = 10  , x = 10

// let b;

// console.log(b === undefined);

// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const markMass = 78;
// const markHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// console.log(markBMI, johnBMI);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
// console.log(jonas);

// const age = 15;

// if (age > 18) {
//   console.log(`Sarah can start driving license 🚗`);
// } else {
//   console.log(`Sarah is too young to drive`);
// }

// const age2 =
//   age >= 18
//     ? `Old enough to drive`
//     : `Too young to drive, she needs to be ${18 - age} years older`;

// console.log(age2);

// const inputYear = "1991";
// console.log(Number(inputYear) + 18); // 199118

// //convert string to a number

// console.log(Number(inputYear));

// console.log(23);
// console.log("23");

// console.log("hi");

// //type coercion
// console.log("I am " + 23 + " years old");

//5 Falsy Values:
