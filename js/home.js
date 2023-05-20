document.addEventListener("DOMContentLoaded", () => {
  let loginState = sessionStorage.getItem("IsLogin");
  let LoginUserName = sessionStorage.getItem("LoginUserName");
  let signBTN = document.getElementById("userlink");
  let NavUsername = document.getElementById("userName");
  let acessoriesBTN = document.getElementById("acessories");
  let spare = document.getElementById('spare')
  let Models = document.getElementById('Models');
  let maintainace = document.getElementById('maintainace')

  function xloading() {
    console.log("xloading function called");
    console.log("loginState:", loginState);
    console.log("LoginUserName:", LoginUserName);

    if (Boolean(loginState)) {
      signBTN.innerHTML = "SignOut";
      NavUsername.innerHTML = "Welcome .... " + LoginUserName;
    } else {
      signBTN.innerHTML = "SignIn";
      NavUsername.innerHTML = "";
    }
  }
  signBTN.addEventListener("click", function () {
    sessionStorage.setItem("IsLogin", false);
    loginState = false;
    sessionStorage.clear();
  });

  acessoriesBTN.addEventListener("click", function () {
    if (Boolean(loginState)) {
      
        location.assign("../product.html");
     }else{
        location.assign("../login.html");
        sessionStorage.clear();
    }
  });


  spare.addEventListener("click", function () {
    if (Boolean(loginState)) {
      
        location.assign("../product.html");
     }else{
        location.assign("../login.html");
        sessionStorage.clear();
    }
  }); 
  Models.addEventListener("click", function () {
    if (Boolean(loginState)) {
      
        location.assign("../product.html");
     }else{
        location.assign("../login.html");
        sessionStorage.clear();
    }
  }); 
  maintainace.addEventListener("click", function () {
    if (Boolean(loginState)) {
      
        location.assign("product.html");
     }else{
        location.assign("../login.html");
        sessionStorage.clear();
    }
  });

  if (signBTN && NavUsername) {
    // check if elements are found
    window.addEventListener("load", xloading);
  } else {
    console.log("Error: HTML element not found");
  }
});
