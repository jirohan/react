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

//ARROW FUNCTION AND THIS
// const person = {
//   talk() {
//     setTimeout(() => {
//       console.log("this", this);
//     }, 2000);
//   }
// };

// person.talk();

//ARRAY MAP
// const colors = ['red', 'green', 'blue'];
// const items = colors.map(color => `<li>${color}</li>`);

// console.log(items);

// const ipo = ['gcl', 'noifra', 'nic', 'bpc'];
// const share = ipo.map(ipo => `<li>${ipo}</li>`);

// console.log(share);


//OBJECT DESTRUCTION
// const address = {
//   street: '',
//   city: '',
//   country: ''
// };

// const { street, city } = address;
// const { country: ct } = address;

// const name = {
//   firstName: 'Ram',
//   middleName: '',
//   lastName: ''
// }; 

// const { firstName: fn } = name;

// console.log(fn);

//SPREAD OPERATOR

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combined = first.concat(second);
// const combined = [...first, 'a', ...second, 'b'];
// console.log(combined)

//example 1
// const first = {name : 'Ram'};
// const second = {job: "Youtuber"};

// const profile = {...first, ...second, location: 'Nepal'};
// console.log(profile);


//CLASSES

// class Person {
//   constructor(name){
//     this.name = name;
//   }
//   walk() {
//     console.log("walk");
//   }
// }

// const person = new Person('Shyam Raja');
// console.log(person);

// class School {
//   constructor(section){
//     this.section = section;
//   }
//   run(){
//     console.log("run");
//   }
// }

// const school = new School('Rarahil Memorial School');
// const a = school.run;
// console.log(a);


//INHERITANCE
// class Person {
//     constructor(name){
//       this.name = name;
//     }
//     walk() {
//       console.log("walk");
//     }
//   }
  
// class Teacher extends Person{
//   constructor(name, degree) {
//     super(name);
//     this.degree = degree;
//   }

//   teach(){
//     console.log("teach"); 
//   }
// }

//MODULES
import Teacher, {promote} from "./Teacher";

//Default -> import ... from "";
//Named -> import { ... } form '';

const teacher = new Teacher('Ram', 'MSc');
teacher.teach();
