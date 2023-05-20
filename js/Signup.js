
document.addEventListener("DOMContentLoaded", () => {
    let usrname = document.getElementById("usernameId");
    let psswod = document.getElementById("passwordId");
    let mail = document.getElementById("emailId");
    let signup_BTN = document.getElementById("signupBTN");
    // let login_BTN = document.getElementById("loginBTN");
    // let mailLogin = document.getElementById("EmailLogin_Id");
    // let loginPwd = document.getElementById("passwordLogin_id");
  
    ///////////////////////////////add signup data to local storage////////////////////
    signup_BTN.addEventListener("click", saveUsrData);
  
    function saveUsrData() {
      let userinfo = [];
      if (window.localStorage.getItem(mail.value) === null && mail.value !== "") {
        userinfo.push(usrname.value);
        userinfo.push(psswod.value);
        window.localStorage.setItem(mail.value, JSON.stringify(userinfo));
      }else 
      alert("Enter a valid Email");
    }
  

  
  });