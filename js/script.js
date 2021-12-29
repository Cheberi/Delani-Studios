$(document).ready(function(){
    
    // Design
    $("#design-image").click(function(){

        $(".design").slideToggle();
        $("#designPic").fadeToggle();
    });

    // Development
    $("#development").click(function(){

        $(".development").slideToggle();
        $("#developmentPic").fadeToggle();
    });

    // Product management
    $("#management").click(function(){

        $(".management").slideToggle();
        $("#managementPic").fadeToggle();
    });

    //all
    $("#what").click(function(){

        $(".management").fadeToggle();
        $(".development").fadeToggle();
        $(".design").fadeToggle();
        $("#designImage").fadeToggle();
        $("#developmentImage").fadeToggle();
        $("#managemenImage").fadeToggle();
        
    });
});
//  portfolio

$(document).ready(function(){

    // First Row hovering effect

    $("#work4").hover(function(){
        $("#work4BoxName").fadeToggle();
    });

    $("#work3").hover(function(){
        $("#work3BoxName").fadeToggle();
    });

    $("#work2").hover(function(){
        $("#work2BoxName").fadeToggle();
    });

    $("#work1").hover(function(){
        $("#work1BoxName").fadeToggle();
    });

    // second row hovering effect

    $("#work5").hover(function(){
        $("#work5BoxName").fadeToggle();
    });

    $("#work6").hover(function(){
        $("#work6BoxName").fadeToggle();
    });

    $("#work7").hover(function(){
        $("#work7BoxName").fadeToggle();
    });

    $("#work8").hover(function(){
        $("#work8BoxName").fadeToggle();
    });

});

// javascript form validation

var contactUsValidation = function(){

    var name = document.getElementById("userName").value;    
    var email = document.getElementById("userEmail").value;
    var sms = document.getElementById("message").value;

    // validation

    if (name.length < 2 || name == " "){
        alert("Please enter a valid name! \nName must be filled")
        return false;
    };

    atPosition = email.indexOf("@");
    dotPosition = email.lastIndexOf(".");

    if(email == " "){
        alert("Please fill in!")
        return false;
    };

    if (atPosition <= 2){
        alert("Invalid email address!")
        return false;
    };

    if(dotPosition  == -1){
        alert("Invalid email address.")
        return false;
    };

    if(sms == " " || sms < 2){
        alert("Please enter your message")
        return false;
    }

    else{
        alert("Hi "+name+", your message has been sent. We will reach to you as soon as possible.")
    }


};