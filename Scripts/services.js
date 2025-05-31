let services=[];

let inputWash=document.getElementById("txtWash");
let inputCut=document.getElementById("txtCut");
let inputColor=document.getElementById("txtColor");

function Service(wash, cut, color){
    this.wash=wash;
    this.cut-cut;
    this.color=color;
}

function selectedServiceReg(){
    
    let newService = new Service(inputWash, inputCut, inputColor);
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


    if(aService.wash === ""){
        isValidWash=false;
        $("#confirmBooked").css("color", "chocolate").hide();
    }else{$("#washConfirmBooked").show();
    }
    

    if(aService.cut === ""){
        isValidCut=false;
        $("#confirmBooked").css("color", "chocolate").hide();
    }else{$("#cutConfirmBooked").show();
    }
    

    if(aService.color === ""){
        isValidColor=false;    
        $("#confirmBooked").css("color", "chocolate").hide();
    }else{$("#colorConfirmBooked").show();
    }


    return validation;
    
    // && is the exact same as saying 'and'
}



function clearForm(){}

function init(){
    $("#btnBook").on("click", book);
    $("#washConfirmBooked").show();
    $("#cutConfirmBooked").show();
    $("#colorConfirmBooked").show();

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
