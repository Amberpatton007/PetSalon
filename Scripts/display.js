function displayPets(){
    //travel the array (use a for loop)
    //print on the console the name
     let div=document.getElementById("petList");
    let result="";

    for(let i=0;i<pets.length;i++){
        result+= `
            <tr id="${i}">
                <td>${pets[i].name}</td>
                <td>${pets[i].age}</td>
                <td>${pets[i].gender}</td>
                <td>${pets[i].breed}</td>
                <td>${pets[i].service}</td>
                <td><button class="btn btn-danger btn-sm" onclick="deletePet(${i})">Delete</button></td>
            </tr>`
        
       // card+=`<p>${pets[i].name}</p>`;
       // card+=`
       // <div class="card">
       // <div class="card-body">
       //     <h5>${pets[i].name}<h5>
       //     <h6 class="card-subtitle mb-2 text-body-secondary">${pets[i].breed}</h6>
       //     <p class="card-text">${pets[i].age}, ${pets[i].gender == "Male" ? "Male ♂" : "Female ♀"}</p>
       //     </div>
       //     <button class="btn btn-danger">Delete</button>
       // </div>`;

    }
    div.innerHTML=result;
}

function displayRow(){
    //do not forget to add table into html
    //here you will create a row
    let rowSection = document.getElementById("pets");
    let result = "";

    for(let index=0; index<pets.length; index++){
        result +=`
            <tr>
                <td>${pets[index].name}</td>
                <td>${pets[index].age}</td>
                <td>${pets[index].gender}</td>
                <td>${pets[index].breed}</td>         
                <td>${pets[index].service}</td>        
            </tr>
        `
    }
    rowSection.innerHTML = result;
}

function findOldestPet(){

}

function displayInfo(){
    document.getElementById("info").innerHTML= `<p>Total number of pets: ${pets.length}</p>`
}