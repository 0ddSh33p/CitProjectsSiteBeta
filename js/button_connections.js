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
    console.log(data)
    if (data.propType == 1){
        window.location.replace("https://localhost:3000/student")
    }
}

//script to put data into the dropdowns and also make it work

//admin data and putting it into the dropdown for add project box
let data = ["Caudle", "Norris"];
let list = document.getElementById("advisors");
for (i = 0; i < data.length; ++i) {
    let option = document.createElement('option');
    option.innerText = data[i];
    list.appendChild(option);
}

//admin data and putting it into the dropdown for edit project box
let list2 = document.getElementById("advisors2");
for (i = 0; i < data.length; ++i) {
    let option = document.createElement('option');
    option.innerText = data[i];
    list2.appendChild(option);
}

//junior data
let jdata = ["Ram", "Shyam", "Sita", "Gita", "Shyam", "Sita", "Gita", "Shyam", "Sita", "Gita", "Shyam", "Sita", "Gita", "Shyam", "Sita", "Gita", "Shyam", "Sita", "Gita", "Shyam", "Sita", "Gita", "Shyam", "Sita", "Gita", "Shyam", "Sita", "Gita", "Shyam", "Sita", "Gita", "Shyam", "Sita", "Gita", "Shyam", "Sita", "Gita", "Shyam", "Sita", "Gita", "Shyam", "Sita", "Gita","kirby"];

//putting it into the edit dropdown
let jlist = document.getElementById("juniors");
for (i = 0; i < jdata.length; i++) {
    let option = document.createElement('li');
    //create checkbox
    let checkbox = document.createElement('input');
                    
    // Assigning the attributes to created checkbox
    checkbox.type = "checkbox";
    checkbox.id = i;
        
    // creating label for checkbox
    let label = document.createElement('label');
    label.className = "container";

    //creating span for checkbox
    let span = document.createElement('span');
    span.className = "checkmark";

    // assigning attributes for the created label tag 
    label.htmlFor = checkbox.id;
        
    // appending the created text to the created label tag 
    label.appendChild(document.createTextNode(jdata[i]));
        
    // appending the checkbox and label to div
    option.appendChild(checkbox);
    option.appendChild(span);
    label.appendChild(option);
    jlist.appendChild(label);                    
}

//putting it into the add dropdown
let Ujlist = document.getElementById("Ujuniors");
for (i = 0; i < jdata.length; i++) {
    let option = document.createElement('li');
    //create checkbox
    let checkbox = document.createElement('input');
                    
    // Assigning the attributes to created checkbox
    checkbox.type = "checkbox";
    checkbox.id = i+"jli";
        
    // creating label for checkbox
    let label = document.createElement('label');
    label.className = "u-container";

    //creating span for checkbox
    let span = document.createElement('span');
    span.className = "u-checkmark";

    // assigning attributes for the created label tag 
    label.htmlFor = checkbox.id;
        
    // appending the created text to the created label tag 
    label.appendChild(document.createTextNode(jdata[i]));
        
    // appending the checkbox and label to div
    option.appendChild(checkbox);
    option.appendChild(span);
    label.appendChild(option);
    Ujlist.appendChild(label);                    
}
        
//sophomore data
let sdata = ["a", "b", "c", "d"];

//putting it into the edit dropdown
let slist = document.getElementById("sophomores");

for (i = 0; i < sdata.length; i++) {
    let soption = document.createElement('li');
    //create checkbox
    let scheckbox = document.createElement('input');
    
    // Assigning the attributes to created checkbox
    scheckbox.type = "checkbox";
    scheckbox.id = i+"li";
        
    // creating label for checkbox
    let slabel = document.createElement('label');
    slabel.className = "container";

    //creating span for checkbox
    let Sspan = document.createElement('span');
    Sspan.className = "checkmark";

    // assigning attributes for the created label tag 
    slabel.htmlFor = scheckbox.id;
        
    // appending the created text to the created label tag 
    slabel.appendChild(document.createTextNode(sdata[i]));
        
    // appending the checkbox and label to div
    soption.appendChild(scheckbox);
    soption.appendChild(Sspan);
    slabel.appendChild(soption);
    slist.appendChild(slabel);                    
}

//putting it into the add dropdown
let Uslist = document.getElementById("Usophomores");

for (i = 0; i < sdata.length; i++) {
    let soption = document.createElement('li');
    //create checkbox
    let scheckbox = document.createElement('input');
    
    // Assigning the attributes to created checkbox
    scheckbox.type = "checkbox";
    scheckbox.id = i+"sli";
        
    // creating label for checkbox
    let slabel = document.createElement('label');
    slabel.className = "u-container";

    //creating span for checkbox
    let Sspan = document.createElement('span');
    Sspan.className = "u-checkmark";

    // assigning attributes for the created label tag 
    slabel.htmlFor = scheckbox.id;
        
    // appending the created text to the created label tag 
    slabel.appendChild(document.createTextNode(sdata[i]));
        
    // appending the checkbox and label to div
    soption.appendChild(scheckbox);
    soption.appendChild(Sspan);
    slabel.appendChild(soption);
    Uslist.appendChild(slabel);                    
}

//user box
//change if the junior dropdown is visible or not when clicked
var UcheckList = document.getElementById('list1');
var UcheckBoxes = document.getElementById('Ujuniors');
UcheckList.getElementsByClassName('u-anchor')[0].onclick = function(evt) {
    if (UcheckList.classList.contains('u-visible')) {
        UcheckList.classList.remove('u-visible');
        UcheckBoxes.classList.remove('u-visible');
        console.log("u-j is not visible")
    } else {
        UcheckList.classList.add('u-visible');
        UcheckBoxes.classList.add('u-visible');
        console.log("u-j is visible")
    }
}

//change if the sophomore dropdown is visible or not when clicked
var UScheckList = document.getElementById('list2');
var UScheckBoxes = document.getElementById('Usophomores');
UScheckList.getElementsByClassName('u-anch')[0].onclick = function(evt) {
    if (UScheckList.classList.contains('u-v')) {
        UScheckList.classList.remove('u-v');
        UScheckBoxes.classList.remove('u-v');
        console.log("u-s is not visible")
    } else {
        UScheckList.classList.add('u-v');
        UScheckBoxes.classList.add('u-v');
        console.log("u-s is visible")
    }
}

//edit box

//change if the junior dropdown is visible or not when clicked
var checkList = document.getElementById('list3');
var checkBoxes = document.getElementById('juniors');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList.classList.contains('visible')) {
        checkList.classList.remove('visible');
        checkBoxes.classList.remove('visible');
        console.log("j is not visible")
    } else {
        checkList.classList.add('visible');
        checkBoxes.classList.add('visible');
        console.log("j is visible")
    }
}

//change if the sophomore dropdown is visible or not when clicked
var ScheckList = document.getElementById('list4');
var ScheckBoxes = document.getElementById('sophomores');
ScheckList.getElementsByClassName('anch')[0].onclick = function(evt) {
    if (ScheckList.classList.contains('v')) {
        ScheckList.classList.remove('v');
        ScheckBoxes.classList.remove('v');
        console.log("s is not visible")
    } else {
        ScheckList.classList.add('v');
        ScheckBoxes.classList.add('v');
        console.log("s is visible")
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
