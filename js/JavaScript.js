let usrname=document.getElementById("username");
let psswod=document.getElementById("password");
let signup_BTN=document.getElementById("signupBTN");




signup_BTN.addEventListener("click", (e) => {
    window.localStorage.setItem(usrname.id,usrname.value)
    window.localStorage.setItem(psswod.id,psswod.value)
  });




