function checkLength(){
    //var user_name = document.getElementById("user_name");
    var user_name = document.forms["myForm"]["your-name"].value;

    if(user_name.length > 50){
        document.getElementById('error-name').innerHTML="User name is too long - exceed the maximum of 50 characters";

        //alert("User name is too long - exceed the maximum of 50 characters");
        //return false
    }
    else if(user_name.length<6 && user_name.length>0){
        document.getElementById('error-name').innerHTML="User name is too short - below the 6 character minimum";

        //alert("User name is too short - below the 6 character minimum");
        //return false
    }
    else if(user_name.length <= 50 && user_name.length >= 6){
        document.getElementById('error-name').innerHTML=" ";
        //document.getElementById("user_name").style.borderColor = " ";
    }
}

function check_name() {
    var first_name = document.getElementById("first_name");
    var last_name = document.getElementById("last_name")

    if(first_name && last_name) {
        if (first_name.value.length > 50) {
            document.getElementById("firstname").innerHTML = "First name is too long - exceed the maximum of 50 characters"
        }
        else {
            document.getElementById("firstname").innerHTML = " ";
        }

        if (last_name.value.length > 50) {
            document.getElementById("lastname").innerHTML = "Last name is too long - exceed the maximum of 50 characters"
        }
        else {
            document.getElementById("lastname").innerHTML = " ";
        }
    }

}


function length(){
    document.getElementById("user_name").onblur = checkLength;
    document.getElementById("first_name").onblur=check_name;
    document.getElementById("last_name").onblur=check_name;
}




