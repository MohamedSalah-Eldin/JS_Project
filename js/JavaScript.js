let usrname=document.getElementById("usernameId");
let psswod=document.getElementById("passwordId");
let mail=document.getElementById("emailId");
let signup_BTN=document.getElementById("signupBTN");
let userinfo=[]



signup_BTN.addEventListener("click", (e) => {

    saveusrData()
  });

  function saveusrData(){
    if(window.localStorage.getItem(mail.value)===null && mail.value !=="")
   {
    userinfo.push(usrname.value);
    userinfo.push(psswod.value);
    window.localStorage.setItem(mail.value,JSON.stringify(userinfo));    
  } 
}




