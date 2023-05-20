document.addEventListener("DOMContentLoaded", () => {
    
    let AssignBTNVar = document.getElementById("AssignBTN");
  let SETusername = document.getElementById("SETusernameId");
    let SETemail = document.getElementById("SETemailId");
    let SETpassword = document.getElementById("SETpasswordId");
    let signBTN = document.getElementById("userlink");
    let NavUsername = document.getElementById("userName");
  
    let loginState = sessionStorage.getItem("IsLogin");
    let LoginUserName = sessionStorage.getItem("LoginUserName");
    AssignBTNVar.addEventListener("click", SetUsrData);
  
    function SetUsrData() {
      let userinfo = [];
        userinfo.push(SETusername.value);
        userinfo.push(SETpassword.value);
        window.localStorage.setItem(SETemail.value, JSON.stringify(userinfo));
    } 
    
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


    if (signBTN && NavUsername) {
      // check if elements are found
      window.addEventListener("load", xloading);
    } else {
      console.log("Error: HTML element not found");
    }

    signBTN.addEventListener("click", function () {
      if (Boolean(loginState)) {
          loginState = false;
          location.assign("../login.html");
          sessionStorage.clear();
      }
    });
    
  });