var loginState = false;

let signBTN = document.getElementById("userlink");



function xloading(loginState){
  if(loginState){
    signBTN.innerText = 'signOut';
  }
}

