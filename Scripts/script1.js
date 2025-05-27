console.log("Welcome to session 1");

// ---- ARRAYS [] ---- 
let fruits = ["apple","banana", "orange"];
console.log(`This is an array: ${fruits}`);
console.table(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1] = "Cherry";
console.log(fruits);

//array length
console.log(fruits.length);
// add and remove items
fruits.push("watermelon");//adding at the end
console.log(fruits);

fruits.pop();//removes from the end
fruits.pop();//removes from the end
console.log(fruits);

fruits.unshift("grapes");//adding at the beginning
console.log(fruits);

fruits.shift();//remove from the beginning
console.log(fruits);

// CHALLENGE 1 . using arrays []
// 1. Create an array of students names
// 2. use a for loop to iterate through the array
// 3. log each student name

let students = ["Brad","Alexis", "Chris","Ryan","Michel","Wilbert","Amber"];

for(let i=0;i<students.length;i++){
    console.log(students[i]);
}

// ----- OBJECTS {} ------
// An obj is a collection of key-pair values
// we can have the data together in an structure way

//obj literal
let person = {
    name:"Mike",
    lastName:"Scott",
    age:40,
    isStudent:false
}

// accessing the properties in an obj
console.log(`The person name is ${person.name}`);
console.log(`The person age is ${person['age']}`);
console.log(person.lastName);
console.log(person.isStudent);

let student1 = {
    name:"Leopoldo",
    age:99,
    email:"leo@sdgku.edu",
    address:"742 evergreen terrace springfliend, USA"
}

console.log(student1);

// Mini Challenge: Create another 3 students
let student2 = {
    name:"bruce",
    email:"bruce@gmail.com",
    age:50,
    address:"123 maple street, apartment 4b"
}
let student3 = {
    name:"pam",
    email:"pam@gmail.com",
    age:20,
    address:"123 maple street, apartment 4b"
}
let student4 = {
    name:"peter",
    email:"peter@gmail.com",
    age:60,
    address:"123 maple street, apartment 4b"
}

let studentsList =[];
studentsList.push(student1,student2,student3,student4);

console.log("student List: " +studentsList.length);

// display on the HTML the total of students
// Create a <p> with id on the HTML
// use the document.getElementById()

document.getElementById("studentCounter").innerHTML="student List: " +studentsList.length;

console.log(`email: ${studentsList[0].email}, address: ${studentsList[0].address}`);


// challenge: display the students name on the console ... * use the array
function getStudentsNames(){
    let list = document.getElementById("list");
    for(let i=0; i<studentsList.length;i++){
        console.log(`Name: ${studentsList[i].name}`);
        list.innerHTML+=`<li>${studentsList[i].name}</li>`;
    }
}

getStudentsNames();