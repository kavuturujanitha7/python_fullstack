alert("Welcome to NRIIIT Learning Management System")
let heading = document.getElementById
("welcome");
heading.innerHTML = "welcome Future  software engineers"
console.log("heading element: ", heading)
let msg = document.getElementById("message")
msg.innerHTML = "javascript is fun"
console.log("Message element: ", msg)
function showmessage() {
    alert("welcome to NRIIT Learning Management System")
}
function changeHeading(){
    document.getElementById("welcome").
    innerHTML = "welcome python Fullstack Developers"
}
let heading1= document.querySelector("#welcome")
console.log("Heading element: ", heading1)
let button = document.getElementById("btnGreeting");
button.addEventListener("click",function() {
    alert("Welcome to javascript Event Handling");
});
let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit",function(event)
{
    event.preventDefault();
    let name = document.getElementById("name").Value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (!name || !email || !password){
        alert("please fill in all fields.");
        return;
    }
    alert("Registration successsful!");
    console.log("name:", name);
    console.log("email", email);
    console.log("password:", password);