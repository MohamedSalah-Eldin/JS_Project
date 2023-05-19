// let usrname = document.getElementById("usernameId");
// let psswod = document.getElementById("passwordId");
// let mail = document.getElementById("emailId");
// let signup_BTN = document.getElementById("signupBTN");
// let login_BTN = document.getElementById("loginBTN");
// let mailLogin = document.getElementById("EmailLogin_Id")//ID


// let userinfo = [];

// ///////////////////////////////add signup data to local storage////////////////////
// // signup_BTN.addEventListener("click", (e) => {
// //     saveusrData();
// //   });
// // signup_BTN.addEventListener("click",saveUsrData());

// function saveUsrData() {
//   if (window.localStorage.getItem(mail.value) === null && mail.value !== "") {
//     userinfo.push(usrname.value);
//     userinfo.push(psswod.value);
//     window.localStorage.setItem(mail.value, JSON.stringify(userinfo));
//     //window.location.replace('http://127.0.0.1:5501/home.html');
//   }
// }

// ///////////////////////////////get login data from local storage////////////////////
// //////////still testing phase//////////
// login_BTN.addEventListener("click",  Login());
//   // let psswodLogin = document.getElementById("passwordLogin_id"
 

// function Login() {
//   if (mailLogin.value==JSON.parse(window.localStorage.getItem(mail.value)) ) {
//     // if(JSON.parse(windows.localStorage.getItem(mail.value.userinfo[1]))){
//     //window.location.replace("http://127.0.0.1:5501/home.html");

//     console.log("كلو تمام ......");
//     // }else{console.log("الباسورد علط يا نجم ")}
//   } else {
//     console.log("الايميل اللي بايظ ,علط يا نجم ");
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  let usrname = document.getElementById("usernameId");
  let psswod = document.getElementById("passwordId");
  let mail = document.getElementById("emailId");
  let signup_BTN = document.getElementById("signupBTN");
  let login_BTN = document.getElementById("loginBTN");
  let mailLogin = document.getElementById("EmailLogin_Id");
  let loginPwd = document.getElementById("passwordLogin_id");

  ///////////////////////////////add signup data to local storage////////////////////
  //signup_BTN.addEventListener("click", saveUsrData);

  function saveUsrData() {
    let userinfo = [];
    if (window.localStorage.getItem(mail.value) === null && mail.value !== "") {
      userinfo.push(usrname.value);
      userinfo.push(psswod.value);
      window.localStorage.setItem(mail.value, JSON.stringify(userinfo));
      //window.location.replace('http://127.0.0.1:5501/home.html');
    }
  }
  var loginState = false;

  ///////////////////////////////get login data from local storage////////////////////
  login_BTN.addEventListener("click", Login);

  function Login() {
    loginState = true;
    let userinfo = JSON.parse(window.localStorage.getItem(mailLogin.value));
    if (userinfo !== null && userinfo[1] === loginPwd.value) {
      location.assign('../home.html');
    } else {
      alert("incorrect password or email");
    loginState = false;
    }
    return loginState;
  }

  let signBTN = document.getElementById("userlink");

  function xloading(loginState){
    if(loginState){
      signBTN.innerHTML ='SignOut';
    }
    else{
      signBTN.innerHTML='SignIn';
    }
  }

function changeState(loginState){
   loginState = false;
   return loginState; 
}

  signBTN.addEventListener("click",changeState(loginState));
  
});



