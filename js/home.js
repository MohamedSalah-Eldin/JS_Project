

document.addEventListener("DOMContentLoaded", () => {


  let signBTN = document.getElementById("userlink");
  let NavUsername = document.getElementById("userName");

  function xloading(loginState){
    if(loginState){
      signBTN.innerHTML ='SignOut';
      NavUsername.innerHTML = userInfo;
    }
    else{
      signBTN.innerHTML='SignIn';
      NavUsername.style.visibility = false;
    }
  }
  
  function changeState(loginState){
   loginState = false;
   return loginState; 
  }
  
  signBTN.addEventListener("click",changeState(loginState));
  


});


