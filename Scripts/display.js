function displayPets(){
    //travel the array (use a for loop)
    //print on the console the name
    let div=document.getElementById("petList");
    let card="";

    for(let i=0;i<pets.length;i++){
        card+=`<p>${pets[i].name}</p>`;
        card+=`
        <div class="card">
        <div class="card-body">
            <h5>${pets[i].name}<h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${pets[i].breed}</h6>
            <p class="card-text">${pets[i].age}, ${pets[i].gender == "Male" ? "Male ♂" : "Female ♀"}</p>
            </div>
            <button class="btn btn-danger">Delete</button>
        </div>`;

    }
    div.innerHTML=card;
}

function displayTable(){
    //do not forget to add table into html
    //here you will create a row
}

function findOldestPet(){

}

function displayInfo(){
    document.getElementById("info").innerHTML= `<p>Total number of pets: ${pets.length}</p>`
}