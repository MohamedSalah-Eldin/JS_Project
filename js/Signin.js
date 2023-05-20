
document.addEventListener("DOMContentLoaded", () => {
  // let usrname = document.getElementById("usernameId");
  // let psswod = document.getElementById("passwordId");
  // let mail = document.getElementById("emailId");
  // let signup_BTN = document.getElementById("signupBTN");
  let login_BTN = document.getElementById("loginBTN");
  let mailLogin = document.getElementById("EmailLogin_Id");
  let loginPwd = document.getElementById("passwordLogin_id");

  login_BTN.addEventListener("click", Login);

  function Login() {
    let userinfo = JSON.parse(window.localStorage.getItem(mailLogin.value));
    if (userinfo !== null && userinfo[1] === loginPwd.value) {
      sessionStorage.setItem("IsLogin", true);
      sessionStorage.setItem("LoginUserName", userinfo[0]);
      location.assign('../home.html');
    } else {
      alert("incorrect password or email");
    }
    return loginState;
  }

});




