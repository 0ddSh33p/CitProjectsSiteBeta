//login
const baseURL = "https://localhost:3000";
async function tryLogin(e){
    var sendUser = document.getElementById("username");
    var sendPass = document.getElementById("password");

    // add the final url here
    
    e.preventDefault();
    const res = await fetch(baseURL + "/tryUser/" + sendUser.value + "/" + sendPass.value,
        {
            method: 'GET'	
        });
    const data = await res.json();
   //console.log(data.propType)
    if (data.propType == 1){
        window.location.replace("https://localhost:3000/student")
    } else if (data.propType == 2){
        window.location.replace("https://localhost:3000/admin")
    }
}
//script to add the project to the database
async function add_project() {
    var form = document.getElementById("add-form");
    var sendName = document.getElementById("pgname");
    var sendAdvisor = document.getElementById("advisors");
    var success = await fetch(baseURL + "/addProject/" + sendName.value + "/" + sendAdvisor.value);
    console.log(success);
    // Clear form inputs after data processing
    form.reset(); // Resets all input fields
}

async function addUser() {
    var name = document.getElementByName("userBox");
    var pass = document.getElementByName("passBox");
    var grad = document.getElementById("numeric-input");
    var admin = document.getElementByID("adminBox");
    var success = await fetch(baseURL + "/addUser/" + name.value + "/" + pass.value + "/" + grad.value + "/" + admin.value);
    console.log(success);
    // Clear form inputs after data processing
    form.reset(); // Resets all input fields
    add_user_hide();
}
async function addUserRepeat() {
    var name = document.getElementByName("userBox");
    var pass = document.getElementByName("passBox");
    var grad = document.getElementById("numeric-input");
    var admin = document.getElementByID("adminBox");
    var success = await fetch(baseURL + "/addUser/" + name.value + "/" + pass.value + "/" + grad.value + "/" + admin.value);
    console.log(success);
    // Clear form inputs after data processing
    form.reset(); // Resets all input fields
    add_user_show();
}

//script to make edit add project disappear
function add_project_cancel() {
    var form = document.getElementById("add-form");
    var add_project_box = document.getElementById('add_project_box');
    add_project_box.style.display='none';
    // Clear form inputs after data processing
    form.reset(); // Resets all input fields
}

//script to make add project box show
function add_project_show() {
    var add_project_box = document.getElementById('add_project_box');
    if (add_project_box.style.display ='none') {
        add_project_box.style.display = 'inline-block';
    }
}


//script to make edit box disappear
function edit_cancel() {
    var editbox = document.getElementById('edit_box');
    editbox.style.display='none';
}

//script to make edit box show
function edit_show(id) {
    var editbox = document.getElementById('edit_box');
    if (editbox.style.display ='none') {
        editbox.style.display = 'inline-block';
    }
}


//script to make add options disappear
function add_hide() {
    var options = document.getElementById('add-options');
    options.style.display='none';
}

//script to make add options show
function add_show() {
    var options = document.getElementById('add-options');
    if (options.style.display ='none') {
        options.style.display = 'inline-block';
    }
}

//script to make add options disappear
function add_user_hide() {
    var form = document.getElementById("user-form");
    var ub = document.getElementById('user_box');
    ub.style.display='none';
    // Clear form inputs after data processing
    form.reset(); // Resets all input fields
}

//script to make add options show
function add_user_show() {
    var form = document.getElementById("user-form");
    var ub = document.getElementById('user_box');
    if (ub.style.display ='none') {
        ub.style.display = 'inline-block';
    }
    // Clear form inputs after data processing
    form.reset(); // Resets all input fields
}


//script to make logout box disappear
function log_cancel() {
    var logbox = document.getElementById('logout_box');
    logbox.style.display='none';
}

//script for making the logout box appear when logout is pressed
function logout_show() {
    var logbox = document.getElementById('logout_box');
        if (logbox.style.display ='none') {
            logbox.style.display = 'inline-block';
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
    //console.error("Logout failed:", error);
  }
}

//script to make logout box disappear
function del_cancel() {
    var delbox = document.getElementById('del_box');
    delbox.style.display='none';
}

//script for making the logout box appear when logout is pressed
function del_show(id) {
    var delbox = document.getElementById('del_box');
        if (delbox.style.display ='none') {
            delbox.style.display = 'inline-block';
        }
}


window.addEventListener("load", async (event) => {
  const res = await fetch(baseURL + "/getProjectNames",
        {
            method: 'GET'	
        });
    const data = await res.json();
    for (let i = 0; i < data.length; i++) {
      add_btn(data[i])
    }
});
//Create the project buttons on the admin page
function add_btn(data){
    buttonZone = document.getElementById('project_buttons');
    var username = "GET THEIR NAME"
    if(buttonZone != null){
        if(document.getElementById('add')){
            buttonZone.innerHTML = buttonZone.innerHTML + '\n<div class="admin_button"> \n <button class="project_tile", onclick = "openVNC('+data.projectname+','+username+')"> '+data.projectname+'</button><br> \n <a href="#" onclick="edit_show('+data.id+')">Edit</a><a href="#" onclick="del_show('+data.id+')" class="delete">Delete</a><br></div>'
        } else {
            buttonZone.innerHTML = buttonZone.innerHTML + '\n<div class="student_button"> \n <button class="project_tile", onclick = "openVNC('+data.projectname+','+username+')"> '+data.projectname+'</button></div>'
        }
        
    }
}
