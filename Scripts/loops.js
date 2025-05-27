//for 
for(let i=0;i<4;i++){
    document.write("My for is working");
}

//do-while loop

console.log("----- do while -----")
let j=11; //start point
do{
    console.log(j);
    j++; //interval

}while(j<=10); //stop condition


//while

function countDown(){
    let seconds =10;
    let results ="";

    while(seconds>0){
        results +=`<p> Launching in ${seconds} </p>`;
        results--;

    }

    results += "Liftoff!"
    document.write(results);
}

countDown()

//do-while

function passwordPrompt(){
    let correctPassword= "1234";
    let userInput;
    let notification = "Simulating password input";

    do{
        userInput = prompt("Enter your password: ");
        notification+="User entered: " + userInput;

    }while(userInput !== correctPassword);

    document.write(notification);
}