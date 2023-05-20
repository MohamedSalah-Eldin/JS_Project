document.addEventListener("DOMContentLoaded", () => {
  let loginState = sessionStorage.getItem('Islogin');
  let LoginUserName = sessionStorage.getItem('LoginUserName')
  let signBTN = document.getElementById("userlink");
  let NavUsername = document.getElementById("userName");

  function xloading() {
    if (Boolean(loginState)) {
      signBTN.innerHTML = 'SignOut';
      NavUsername.innerHTML = LoginUserName;
    } else {
      signBTN.innerHTML = 'SignIn';
      NavUsername.innerHTML = '';
    }
  }

  window.addEventListener("load", xloading);
});