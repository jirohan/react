//var -> function
//let -> block
//const -> block

// function sayHello(){
//   for (let i = 0; i < 5; i++){
//     console.log(i);
//   }
//   console.log(i);
// }

// sayHello();

// const x= 1;
// x= 2;
// console.log(x);

//OBJECTS
// const person = {
//   name: 'Ram',
//   walk () {},
//   talk() {}
  
// };

// person.talk();
// person.name = '';

// const targetMember = 'name';
// person[targetMember.value] = 'Shyayam'; 

//this
// const person = {
//   name: "Ram",
//   walk() {
//     console.log(this);
//   }
// };

// person.walk();

// const walk = person.walk.bind(person);
// walk();

//window object


//Arrow Function
//method 1
// const square = (number) => {
//   return number * number;
// }
// console.log(square(5));

// //method 2
// const square1 = number => number * number;
// console.log(square1(57));

// //example 1
// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false },
// ];

// const activejobs = jobs.filter(job => job.isActive);

const person = {
  talk() {
    setTimeout(() => {
      console.log("this", this);
    }, 2000);
  }
};

person.talk();