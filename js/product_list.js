var loginState = false;

let signBTN = document.getElementById("userlink");



function xloading(loginState){
  if(loginState){
    signBTN.innerHTML = 'signOut';
    loginState = false;
  }
}

