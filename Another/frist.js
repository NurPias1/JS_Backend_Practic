// // //  Funtion
// // function someOneAge(Name, age) {
// //   console.log(Name + "  age is " + age);
// // }

// // someOneAge("Pias", 25);
// // someOneAge("Zim Khan", 24);

// // //

// // function myFuntions(Name, age) {
// //   console.log(Name + age);
// // }

// // let x = myFuntions("d", 1);

// // console.log(x); /* undefine */
// // //  object

// // const person = {
// //   fristName: "pias",
// //   secoundName: "Nur",
// //   age: "Nur",
// // };

// // console.log(person.fristName + " " + person.secoundName);

// // //
// // console.log(Date());

// // //
// // let country = `bangladesh`;

// // let sentence =
// // console.log();

// //        arrow functions

// function addNumber(a, b) {
//   //normal fuciton
//   console.log(a + b);
// }

// addNumber(3, 20);

// addNumbers = (a, b, c) => {
//   // arrow fucntion
//   console.log(a + b + c);
// };

// addNumbers(3, 3, 6);

// //one line arrow function

// const add2 = (a, b) => a + b;

// console.log(add2(9, 9));

// //  arrow function
// const names = (fName, sName) => fName + sName;

// console.log(names("Zima ", "khan"));

// // function return

// const calculation = (fName, age, gender) => {
//   var output;
//   if (age < 18 && gender === "male") {
//     output = "mr " + fName + "" + " is a child";
//   } else if (age < 18 && gender === "female") {
//     output = "ms " + fName + "" + " is a child";
//   } else if (age < 40 && gender === "male") {
//     output = "mr " + fName + "" + " is a adult";
//   } else if (age < 40 && gender === "female") {
//     output = "ms " + fName + "" + " is a adult";
//   } else if (age > 40 && gender === "male") {
//     output = "mr " + fName + "" + " is a buira";
//   } else if (age > 40 && gender === "female") {
//     output = "ms " + fName + "" + " is a buri";
//   }
//   return output;
// };

// console.log(calculation("Zim", 50, "male"));



function api(dateID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("ID", dateID);
      resolve("success");
    }, 2000);
  });
}

async function re() {
  await api(1);
}
