//login
async function tryLogin(e){
    var sendUser = document.getElementById("username");
    var sendPass = document.getElementById("password");

    // add the final url here
    const baseURL = "https://localhost:3000/tryUser/";
    e.preventDefault();
    const res = await fetch(baseURL + sendUser.value + "/" + sendPass.value ,
        {
            method: 'GET'	
        });
    const data = await res.json();
    console.log(data.propType)
    if (data.propType == 1){
        window.location.replace("https://localhost:3000/student")
    } else if (data.propType == 2){
        window.location.replace("https://localhost:3000/admin")
    }
}

//script to make edit box disappear
function add_project_cancel() {
    var add_project_box = document.getElementById('add_project_box');
    add_project_box.style.display='none';
    console.log("add project box is not visible")
}

//script to make edit box show
function add_project_show() {
    var add_project_box = document.getElementById('add_project_box');
    if (add_project_box.style.display ='none') {
        add_project_box.style.display = 'inline-block';
        console.log("add project box is visible")
    }
}


//script to make edit box disappear
function edit_cancel() {
    var editbox = document.getElementById('edit_box');
    editbox.style.display='none';
    console.log("editout box is not visible")
}

//script to make edit box show
function edit_show() {
    var editbox = document.getElementById('edit_box');
    if (editbox.style.display ='none') {
        editbox.style.display = 'inline-block';
        console.log("editout box is visible")
    }
}


//script to make add options disappear
function add_hide() {
    var options = document.getElementById('add-options');
    options.style.display='none';
    console.log("editout box is not visible")
}

//script to make add options show
function add_show() {
    var options = document.getElementById('add-options');
    if (options.style.display ='none') {
        options.style.display = 'inline-block';
        console.log("editout box is visible")
    }
}

//script to make add options disappear
function add_user_hide() {
    var ub = document.getElementById('user_box');
    ub.style.display='none';
    console.log("add user box is not visible")
}

//script to make add options show
function add_user_show() {
    var ub = document.getElementById('user_box');
    if (ub.style.display ='none') {
        ub.style.display = 'inline-block';
        console.log("add user box is visible")
    }
}


//script to make logout box disappear
function log_cancel() {
    var logbox = document.getElementById('logout_box');
    logbox.style.display='none';
    console.log("logout box is not visible")
}

//script for making the logout box appear when logout is pressed
function logout_show() {
    var logbox = document.getElementById('logout_box');
        if (logbox.style.display ='none') {
            logbox.style.display = 'inline-block';
            console.log("logout box is visible")
        }
}

//script to log out the user
async function logout() {
  try {
    // Send the GET request to the logout route
    const response = await fetch("https://localhost:3000/logout", {
      method: "GET",  // You can also use "POST" if your backend expects it
      credentials: "same-origin" // Ensures cookies are sent if needed
    });

    // After the logout action, redirect to the home page or wherever needed
    window.location.href = "https://localhost:3000"; 
  } catch (error) {
    console.error("Logout failed:", error);
  }
}

//script to make logout box disappear
function del_cancel() {
    var delbox = document.getElementById('del_box');
    delbox.style.display='none';
    console.log("delete box is not visible")
}

//script for making the logout box appear when logout is pressed
function del_show() {
    var delbox = document.getElementById('del_box');
        if (delbox.style.display ='none') {
            delbox.style.display = 'inline-block';
            console.log("delete box is visible")
        }
}
