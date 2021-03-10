function chkPasswords() {
    var first = document.forms["myForm"]["password"].value;
    var second = document.forms["myForm"]["repeat_password"].value;
    //const first = document.getElementById("password");
    //const second = document.getElementById("repeat_password");
    if (first.length<1) {
        document.getElementById('passErr').innerHTML = "You did not enter a password ,Please enter one now.";
    }
    else if(first.length >50){
        document.getElementById('passErr').innerHTML="Your password is too long - exceed the maximum of 50 characters";
    }
    else if(first.length<8 && first.length>1){
        document.getElementById('passErr').innerHTML="Your password is too short - below the 8 characters minimum";
    }
    else if(first.length <= 50 && first.length >=8){
        //document.getElementById('passErr').innerHTML=" ";

        var pass= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,50})(?=.*[!@$%&#^*])$/;
        if(first.match(pass))
        {
            return true;
        }
        else
        {
            alert("Wrong format \n"
                +"Contain at least 8 characters \n"
                +"Contain at least 1 number \n"
                +"Contain at least 1 lowercase character (a-z) \n"
                +"Contain at least 1 uppercase character (A-Z) \n"
                +"Contain at least 1 special character")
            return false;
        }
    }
}


function registerHandlers() {
    document.getElementById("repeat_password").onblur = chkPasswords;
    document.getElementById("myForm").onsubmit = chkPasswords;
    document.getElementById("password").onblur = chkPasswords;
}
