/*This is the top menu toggle*/

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}

let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;


/*This is the form on schedule.html it alerts viewer to fill out the contact form*/
function validateForm(){
    let x = document.forms["myForm"] ["name"].value;
    if (x ==""){
        alert("To start your journey, fill out the form below")
        return false;
    
    }
}

console.log(validateForm());







