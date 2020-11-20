let email=document.getElementById("email");
let pwd=document.getElementById("pwd");
let  password_strength=document.getElementById("password_strength");
function validate(){
       if(email.value==""){
        alert("Email required");
        return  false;
    }
    else if(pwd==""){
        alert("password required");
        return false;
    }
    else if(pwd.value.length<=3){
        alert("password is poor");
        pwd.style.border="3px solid  red";
    }

    else if(pwd.value.length<=7){
        alert("password is medium");
        pwd.style.border="3px solid  orange";
    }

    else if(pwd.value.length<=8){
        alert("password is strong");
        pwd.style.border="3px solid  green";
    }
    else if(password_strength.value.length<=8){
        alert("password is strong");
        pwd.style.border="3px solid  green";
    }

}