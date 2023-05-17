function SignUp(){
    console.log('SignUp function called');
    
    let userName = document.getElementById('username').value;
    let userPwd = document.getElementById('password').value;
    console.log('userName:', userName);
    console.log('userPwd:', userPwd);
    
    let user = {uName: userName, uPwd: userPwd};
  
    // Store the data as a JSON string in localStorage
    localStorage.setItem('usrData', JSON.stringify(user));
    console.log('Data stored in localStorage:', localStorage.getItem('usrData'));
  
    // Retrieve the data from localStorage and parse it as JSON
    const storedData = JSON.parse(localStorage.getItem('usrData'));
    console.log('Parsed JSON data:', storedData);
  
    // Modify the data and store it again
    storedData.uName = user.uName;
    storedData.uPwd = user.uPwd;
    localStorage.setItem('usrData', JSON.stringify(storedData));
    console.log('Modified data stored in localStorage:', localStorage.getItem('usrData'));
  }
