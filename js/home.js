document.addEventListener("DOMContentLoaded", () => {
  let loginState = sessionStorage.getItem('IsLogin');
  let LoginUserName = sessionStorage.getItem('LoginUserName');
  let signBTN = document.getElementById("userlink");
  let NavUsername = document.getElementById("userName");

  function xloading() {
    console.log("xloading function called");
    console.log("loginState:", loginState);
    console.log("LoginUserName:", LoginUserName);

    if (Boolean(loginState)) {
      signBTN.innerHTML = 'SignOut';
      NavUsername.innerHTML = ('Welcome .... |'+LoginUserName);
    } else {
      signBTN.innerHTML = 'SignIn';
      NavUsername.innerHTML = '';
    }
  }
  signBTN.addEventListener("click",function(){sessionStorage.setItem("IsLogin", false);
      loginState = false;
      sessionStorage.clear();
          });

  if (signBTN && NavUsername) { // check if elements are found
    window.addEventListener("load", xloading);
  } else {
    console.log("Error: HTML element not found");
  }
});
