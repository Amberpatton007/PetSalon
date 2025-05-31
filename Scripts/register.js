let pets=[];

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");


//creating the obj constructor (name, age, gender, breed) and create another pet
                //these are parameters
function Pet(name, age, gender, breed, service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}

function register(){
    
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value,inputService.value);
    console.log("NewPet", newPet);
    
    if(isValid(newPet)){
            pets.push(newPet);
            displayInfo();
            clearForm();
            displayPets();
            displayRow();
    }else{
        alert("Please fill out all fields");
    }

}

function isValid(aPet){
    let validation = true;

    if(aPet.name === ""){
        validation=false;
    }

    if(aPet.age === ""){
        validation=false;
    }

    if(aPet.gender === ""){
        validation=false;
    }

    if(aPet.breed === ""){
        validation=false;
    }

    if(aPet.service === ""){
        validation=false;
    }

    return validation;
}

function deletePet(petIndex){
    console.log("Delete pet " + petIndex);
    document.getElementById(petIndex).remove();
    pets.splice(petIndex, 1);
    displayPets();
}


function clearForm(){}

function init(){
    //create objs
    let pets1 = new Pet("Scooby", 99, "male", "great dane", "Grooming");
    let pets2 = new Pet("Foxy", 2, "female", "multipoo", "Grooming");
    let pets3 = new Pet("Ruby", 24, "female", "Kimono Dragon", "Grooming");
    pets.push(pets1, pets2, pets3);
    console.log(pets);

    displayInfo();
   // displayRow();
    displayPets();
}

window.onload=init; //render the HTML

