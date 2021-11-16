/*This is the top menu toggle*/

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
}

let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;


/*This is the form on schedule.html it alerts viewer if required information isn't filled out*/
function validateForm(){
    let x = document.forms["myForm"] ["name"].value;
    if (x ==""){
        alert("Name must be filled out");
        return false;
    
    }
}

/*this shows alert box reading "name must be filled out" if name not on form
console.log(validateForm());*/







