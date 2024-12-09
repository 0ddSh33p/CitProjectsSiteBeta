function tryToLogin(){
    // get refrences to the user inputs
    let pass = document.getElementById("password");
    let user = document.getElementById("username");
  
    //Make sure the user name and pasword have been typed in
    if(pass.value.length > 1 && user.value.length > 1){
      generateSignInRequest(user.value,pass.value);
    }
}