let usrname=document.getElementById("usernameId");
let psswod=document.getElementById("passwordId");
let mail=document.getElementById("emailId");
let signup_BTN=document.getElementById("signupBTN");
let login_BTN=document.getElementById("loginBTN");
let psswodLogin=document.getElementById("passwordLogin_id");
let mailLogin=document.getElementById("EmailLogin_Id");
let userinfo=[]





///////////////////////////////add signup data to local storage////////////////////
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

///////////////////////////////get login data from local storage////////////////////
//////////still testing phase//////////
// login_BTN.addEventListener("click", (e) => {

//     getData()
//   });

//   function getData(){
//    for(let i=0;i<userinfo.length;i++)
//    if(mailLogin.value===localStorage.getItem(mail.value))
//    alert("you are a member in our community");
  
// }
/////////////////////////////////////////




