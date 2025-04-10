var form = document.getElementById("add-form");
var uform = document.getElementById("user-form");
idToDelete = -1;
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
        localStorage.setItem('username',sendUser.value)
        window.location.replace("https://localhost:3000/student")
    } else if (data.propType == 2){
        localStorage.setItem('username',sendUser.value)
        window.location.replace("https://localhost:3000/admin")
    }
}
//script to add the project to the database
async function add_project() {
    var sendName = document.getElementById("pgname");
    var sendAdvisor = document.getElementById("advisors");
    var success = await fetch(baseURL + "/addProject/" + sendName.value + "/" + sendAdvisor.value);

    console.log(success); // Optionally handle the JSON response
    form.reset(); // Resets all input fields
    refresh();
}

async function deleteProject(){
    var success = await fetch(baseURL + "/deleteProject/" + idToDelete);
    console.log(success);
    refresh();
}

async function addUser() {
    var name = document.getElementById("userBox");
    var pass = document.getElementById("passBox");
    var grad = document.getElementById("numeric-input");
    var admin = document.getElementById("adminBox");
    var success = await fetch(baseURL + "/addUser/" + name.value + "/" + pass.value + "/" + grad.value + "/" + admin.checked);
    console.log(success);
    // Clear form inputs after data processing
    uform.reset(); // Resets all input fields
    add_user_hide();
}
async function addUserRepeat() {
    var name = document.getElementById("userBox");
    var pass = document.getElementById("passBox");
    var grad = document.getElementById("numeric-input");
    var admin = document.getElementById("adminBox");
    var success = await fetch(baseURL + "/addUser/" + name.value + "/" + pass.value + "/" + grad.value + "/" + admin.checked);
    console.log(success);
    // Clear form inputs after data processing
    uform.reset(); // Resets all input fields
    add_user_show();
}

//script to make edit add project disappear
function add_project_cancel() {
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
    //input values into the thingy
    let project_input = document.getElementById('project-name');
    let project = document.getElementById('project'+id).textContent;
    project_input.value = project;
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
    var ub = document.getElementById('user_box');
    ub.style.display='none';
    // Clear form inputs after data processing
    uform.reset(); // Resets all input fields
}

//script to make add options show
function add_user_show() {
    var ub = document.getElementById('user_box');
    if (ub.style.display ='none') {
        ub.style.display = 'inline-block';
    }
    // Clear form inputs after data processing
    uform.reset(); // Resets all input fields
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
    const response = await fetch(baseURL + "/logout", {
      method: "GET",  // You can also use "POST" if your backend expects it
      credentials: "same-origin" // Ensures cookies are sent if needed
    });
    localStorage.removeItem('username');

    // After the logout action, redirect to the home page or wherever needed
    window.location.href = baseURL; 
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
    idToDelete = id;
        if (delbox.style.display ='none') {
            delbox.style.display = 'inline-block';
        }
}

//when page loads gets projects
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
    var username = localStorage.getItem('username');;
    console.log(username);
    if(buttonZone != null){
        if(document.getElementById('add')){

            let student_button = document.createElement("div")
            student_button.setAttribute('class', "student_button")

            let project_tile = document.createElement("button")
            project_tile.setAttribute('class', "project_tile")
            project_tile.onclick = () => {openVNC(data.projectname, username)}
            project_tile.setAttribute('id', `project${data.id}`)
            project_tile.innerHTML = `${data.projectname}`

            let br1 = document.createElement("br")

            let edit = document.createElement("a")
            edit.setAttribute('href', "#")
            edit.onclick = () => {edit_show(data.id)}
            edit.innerHTML = "Edit"

            let del = document.createElement("a")
            del.setAttribute('href', "#")
            del.onclick = () => {del_show(data.id)}
            del.setAttribute('class', "delete")
            del.innerHTML = "Delete"

            let br2 = document.createElement("br")

            student_button.appendChild(project_tile)
            student_button.appendChild(br1)
            student_button.appendChild(edit)
            student_button.appendChild(del)
            student_button.appendChild(br2)

            buttonZone.appendChild(student_button)
        } else {

            let student_button = document.createElement("div")
            student_button.setAttribute('class', "student_button")

            let project_tile = document.createElement("button")
            project_tile.setAttribute('class', "project_tile")
            project_tile.onclick = () => {openVNC(data.projectname, username)}
            project_tile.setAttribute('id', `project${data.id}`)
            project_tile.innerHTML = `${data.projectname}`
    
            student_button.appendChild(project_tile)

            buttonZone.appendChild(student_button)
        }
        
    }
}
function openVNC(container, user) {
    window.location.href = baseURL + `/vnc/start/${container}/${user}`;
}
//refresh the page
function refresh(){
    window.location.reload();
}
