function validation(){
    var form=document.getElementById("form");
    var email=document.getElementById("email").value;
    var text=document.getElementById("text");
    var pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML="Your Email Address is Valid.";
        text.style.color="#00ff00";
    }
    else{
        form.classList.add("invalid");
        form.classList.remove("valid");
        text.innerHTML="Enter Valid Email Address.";
        text.style.color="#ff0000";
    }
    if(email==""){
        text.innerHTML="";
        form.classList.remove("invalid");
        form.classList.remove("valid");
    }
}
