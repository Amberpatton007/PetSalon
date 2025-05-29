console.log("Welcome to JQuery");

//javascript vs. jquery (getting elements)

//byId
let htmlElement = document.getElementById("red");
htmlElement = $("#red");
console.log(htmlElement);


//by Class
let htmlElement2 = document.getElementsByClassName("tomato-bg");
htmlElement2 = $(".tomato-bg");
console.log(htmlElement2);

//by Tag Name
let htmElement3 = document.getElementsByTagName("p");
htmlElement3 =$("p");
console.log(htmlElement3);

//ID Selector
$("#red").css("background-color", "red").css("color", "white");
$("#blue").css("background-color", "blue").css("color", "white");

//class selector
let paragraphWithBorder = $(".with-border");
paragraphWithBorder .css("border", "3px solid black");

paragraphWithBorder.on("click", function(){
    console.log("clicked");
    $(this).addClass("bg-gray");
});

//tag selector
$("p").css("curser", "pointer");
//$("p").hide();

// simple and common function

function register(){
    let testEntry = $("#testInput").val(); //get and store the value
    $("#results").append(`<li>${testEntry}</li>`);

}



//hook event

$("#btnRegister").on("click", register);


//another simple and common function

function clickMe(){
    console.log("click me");
    $("#red").hide();
    $("p:last").css("border", "3px dotted black");

}


$("#btnClick").on("click", clickMe);
