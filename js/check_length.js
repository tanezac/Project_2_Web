function checkLength(){
    //var user_name = document.getElementById("user_name");
    var user_name = document.forms["myForm"]["your-name"].value;

    if(user_name.length > 50){
        document.getElementById('error-name').innerHTML="User name's length is too long - exceed the maximum of 50 characters";

        //alert("User name is too long - exceed the maximum of 50 characters");
        //return false
    }
    else if(user_name.length<6 && user_name.length>0){
        document.getElementById('error-name').innerHTML="User name's length is too short - below the 6 character minimum";

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
            document.getElementById("firstname").innerHTML = "First name's length is too long - exceed the maximum of 50 characters"
        }
        else {
            document.getElementById("firstname").innerHTML = " ";
        }

        if (last_name.value.length > 50) {
            document.getElementById("lastname").innerHTML = "Last name's length is too long - exceed the maximum of 50 characters"
        }
        else {
            document.getElementById("lastname").innerHTML = " ";
        }
    }

}
function check_address(){
    var address1 = document.getElementById("address1");
    var address2 = document.getElementById("address2");

    if(address1 && address2){
        if (address1.value.length > 50) {
            document.getElementById("address_1").innerHTML = "The address name's length is too long - exceed the maximum of 100 characters"
        }
        else {
            document.getElementById("address_1").innerHTML = " ";
        }

        if (address2.value.length > 50) {
            document.getElementById("address_2").innerHTML = "The address name's length is too long - exceed the maximum of 100 characters"
        }
        else {
            document.getElementById("address_2").innerHTML = " ";
        }
    }
}
function check_city(){
    var city = document.getElementById("city");
    if(city.value.length > 50){
        document.getElementById("cityErr").innerHTML = "The city name's length is too long - exceed the maximum of 50 characters"

    }
    else {
        document.getElementById("cityErr").innerHTML = " ";

    }
}


function length(){
    document.getElementById("user_name").onblur = checkLength;
    document.getElementById("first_name").onblur=check_name;
    document.getElementById("last_name").onblur=check_name;
    document.getElementById("address1").onblur=check_address;
    document.getElementById("address2").onblur=check_address;
    document.getElementById("city").onblur=check_city;
}




