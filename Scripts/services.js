let services=[];

let inputWash=document.getElementById("txtWash");
let inputCut=document.getElementById("txtCut");
let inputColor=document.getElementById("txtColor");

function Service(wash, cut, color){
    this.wash=wash;
    this.cut=cut;
    this.color=color;
}

function selectedServiceReg(){
    
    let newService = new Service(inputWash.value, inputCut.value, inputColor.value);
    console.log("newService", newService);

    if(isValid(newService)){
        save(newService);  
    }

}

function book(){
    let inputWash = $("#txtWash").val();
    let inputCut = $("#txtCut").val();
    let inputColor = $("#txtColor").val();

    console.log(inputWash, inputCut, inputColor);
}

function isValid(aService){
    let validation = true;


    if(aService.wash == ""){
        validation=false;
        $("#washConfirmBooked").css("color", "chocolate").show();
        console.log("it is empty");
    }else{
        $("#washConfirmBooked").hide();
    }
    

    if(aService.cut == ""){
        validation=false;
        $("#cutConfirmBooked").css("color", "red").show();
    }else{
        $("#cutConfirmBooked").hide();
    }
    

    if(aService.color == ""){
        validation=false;    
        $("#colorConfirmBooked").css("color", "red").show();
    }else{
        $("#colorConfirmBooked").hide();
    }


    return validation;
    
    // && is the exact same as saying 'and'
}



function clearForm(){}

function init(){
    $("#btnBook").on("click", selectedServiceReg);
    $("#washConfirmBooked").hide();
    $("#cutConfirmBooked").hide();
    $("#colorConfirmBooked").hide();

}

window.onload=init;


//constructor
    //description and price

//register
//validate for the console

//init

        //hook events
        //register
        //edit
        //delete
        //creating a doggie cursor
