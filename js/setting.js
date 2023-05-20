document.addEventListener("DOMContentLoaded", () => {
    
    let AssignBTNVar = document.getElementById("AssignBTN");
  let SETusername = document.getElementById("SETusernameId");
    let SETemail = document.getElementById("SETemailId");
    let SETpassword = document.getElementById("SETpasswordId");
  

    AssignBTNVar.addEventListener("click", SetUsrData);
  
    function SetUsrData() {
      let userinfo = [];
        userinfo.push(SETusername.value);
        userinfo.push(SETpassword.value);
        window.localStorage.setItem(SETemail.value, JSON.stringify(userinfo));
    }
  


    
});
