




var usernameInput=document.getElementById("signupName");
var emailInput=document.getElementById("signupEmail");
var passwordInput=document.getElementById("signupPassword");
var allUsers=[]
if(localStorage.getItem("allUsers")!=null){
    allUsers=JSON.parse(localStorage.getItem("allUsers"))
}


function signUp(){
    if(isAllinputIsValid()&& isExist()==false){
var user={
    name:usernameInput.value,
    email:emailInput.value,
    password:passwordInput.value
}
allUsers.push(user);
localStorage.setItem("allUsers",JSON.stringify(allUsers));
console.log(allUsers);
}
else{
    console.log("Not All sign")
}
}

function isExist(){
    for(var i=0;i<allUsers.length;i++ ){
        if(allUsers[i].name.tolowerCase() == usernameInput.value.tolowerCase()||
        allUsers[i].email.tolowerCase() == emailInput.value.tolowerCase()||
        allUsers[i].password.tolowerCase() == passwordInput.value.tolowerCase() 
        ){
            console.log("this user is alreat exist");
            return true
            
        }  

    }
    console.log("this user is new")
    return false
}






function isAllinputIsValid(){
    if(valUsername()&& valemail()&& valPassword()){
        console.log("valid");
        return true
    }
    else{
        console.log("not valid");
        return true
    }
}



function valUsername(){
    var usernamepattern=/^(?=.*[A-Z])[A-Za-z]{1,20}$/;
    var usernamealert=document.getElementById("usernameAlert");
    if(usernamepattern.test(usernameInput.value)==true){
        console.log("good");

        usernameInput.classList.remove("is-invalid");
        usernameInput.classList.add("is-valid");
        usernamealert.classList.replace("d-block","d-none");
        return true

    }
    else{
        console.log("bad");
        usernameInput.classList.remove("is-valid");
        usernameInput.classList.add("is-invalid");
        usernamealert.classList.replace("d-none","d-block");
        return false
    }

}

function valemail(){
    var userEmailpattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/;
    var userEmailAlert=document.getElementById("userEmailAlert");
    if(userEmailpattern.test(emailInput.value)==true){
        console.log("good");

        emailInput.classList.remove("is-invalid");
        emailInput.classList.add("is-valid");
        userEmailAlert.classList.replace("d-block","d-none");
        return true

    }
    else{
        console.log("bad");
        emailInput.classList.remove("is-valid");
        emailInput.classList.add("is-invalid");
        userEmailAlert.classList.replace("d-none","d-block");
        return false
    }

}

function valPassword(){
    var userPasswordpattern=/^.{5,15}$/;
    var userPassAlert=document.getElementById("userPassAlert");
    if(userPasswordpattern.test(passwordInput.value)==true){
        console.log("good");

        passwordInput.classList.remove("is-invalid");
        passwordInput.classList.add("is-valid");
        userPassAlert.classList.replace("d-block","d-none");
        return true

    }
    else{
        console.log("bad");
        passwordInput.classList.remove("is-valid");
        passwordInput.classList.add("is-invalid");
        userEmailAlert.classList.replace("d-none","d-block");
        return false
    }

}
function login() {
    if (isLoginEmpty() == false) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var password = signinPassword.value
    var email = signinEmail.value
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('sessionUsername', signUpArray[i].name)
            if (baseURL == '/') {
                location.replace('https://' + location.hostname + '/home.html')

            } else {
                location.replace(baseURL + '/home.html')

            }
        } else {
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }

}


// for logout
function logout() {
    localStorage.removeItem('sessionUsername')
}


// // all inputs
// var signupName = document.getElementById('signupName')
// var signupEmail = document.getElementById('signupEmail')
// var signupPassword = document.getElementById('signupPassword')
// var signinEmail = document.getElementById('signinEmail')
// var signinPassword = document.getElementById('signinPassword')
//     // to get base url (localhost)
// var pathparts = location.pathname.split('/');
// var baseURL = ''
// for (var i = 0; i < pathparts.length - 1; i++) {
//     baseURL += '/' + pathparts[i]
// }
// console.log(baseURL);

// // to say welcome in home page
// var username = localStorage.getItem('sessionUsername')
// if (username) {
//     document.getElementById('username').innerHTML = "Welcome " + username
// }

// var signUpArray = []
// if (localStorage.getItem('users') == null) {
//     signUpArray = []
// } else {
//     signUpArray = JSON.parse(localStorage.getItem('users'))
// }




// //for check inputs is empty or not
// function isEmpty() {

//     if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
//         return false
//     } else {
//         return true
//     }
// }





// // for check email is exist
// function isEmailExist() {
//     for (var i = 0; i < signUpArray.length; i++) {
//         if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
//             return false
//         }
//     }
// }





// function signUp() {
//     if (isEmpty() == false) {
//         document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
//         return false
//     }
//     // to store all value as object 
//     var signUp = {
//         name: signupName.value,
//         email: signupEmail.value,
//         password: signupPassword.value,
//     }
//     if (signUpArray.length == 0) {
//         signUpArray.push(signUp)
//         localStorage.setItem('users', JSON.stringify(signUpArray))
//         document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
//         return true
//     }
//     if (isEmailExist() == false) {
//         document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'

//     } else {
//         signUpArray.push(signUp)
//         localStorage.setItem('users', JSON.stringify(signUpArray))
//         document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'

//     }


// }




// // ============= for login================
// //for check inputs is empty or not
// function isLoginEmpty() {

//     if (signinPassword.value == "" || signinEmail.value == "") {
//         return false
//     } else {
//         return true
//     }
// }

// function login() {
//     if (isLoginEmpty() == false) {
//         document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
//         return false
//     }
//     var password = signinPassword.value
//     var email = signinEmail.value
//     for (var i = 0; i < signUpArray.length; i++) {
//         if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {
//             localStorage.setItem('sessionUsername', signUpArray[i].name)
//             if (baseURL == '/') {
//                 location.replace('https://' + location.hostname + '/home.html')

//             } else {
//                 location.replace(baseURL + '/home.html')

//             }
//         } else {
//             document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
//         }
//     }

// }




// // for logout
// function logout() {
//     localStorage.removeItem('sessionUsername')
// }

