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
            document.getElementById("firstname").innerHTML = "First name's length is too long - exceed the maximum of 50 characters";
        }
        else {
            document.getElementById("firstname").innerHTML = " ";
        }

        if (last_name.value.length > 50) {
            document.getElementById("lastname").innerHTML = "Last name's length is too long - exceed the maximum of 50 characters";
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
        if (address1.value.length > 100) {
            document.getElementById("address_1").innerHTML = "The address name's length is too long - exceed the maximum of 100 characters";
        }
        else {
            document.getElementById("address_1").innerHTML = " ";
        }

        if (address2.value.length > 100) {
            document.getElementById("address_2").innerHTML = "The address name's length is too long - exceed the maximum of 100 characters";
        }
        else {
            document.getElementById("address_2").innerHTML = " ";
        }
    }
}
function check_city(){
    var city = document.getElementById("city");
    if(city.value.length > 50){
        document.getElementById("cityErr").innerHTML = "The city name's length is too long - exceed the maximum of 50 characters";

    }
    else {
        document.getElementById("cityErr").innerHTML = " ";

    }
}

function check_zipcode(){
    var zipcode = document.getElementById("zip");
    if(zipcode.value.length > 10)
    {
        document.getElementById("zipErr").innerHTML = "The zip code's length is too long - exceed the maximum of 10 characters";
    }
    else if(zipcode.value.length <5 && zipcode.value.length>0 ){
        document.getElementById("zipErr").innerHTML = "The zip code's length is too short - below the 6 character minimum";
    }
    else if(zipcode.value.length <=10 && zipcode.value.length >=5) {
        document.getElementById("zipErr").innerHTML = " ";
    }

}
function format_zipcode(){
    var zipcode = document.getElementById("zip");
    zipcode.value = zipcode.value.replace("-","");
    if(zipcode.value.length >5) {
        zipcode.value = zipcode.value.substring(0, 5) + "-" + zipcode.value.substring(5,10);
    }
    else {
        return true;
    }

}

function check_phone(){
    var phone = document.getElementById("phone");
    if(phone.value.length >12) {
        document.getElementById("phoneErr").innerHTML = "The phone number's length is too long - exceed the maximum of 12 characters";
    }
    else {
        document.getElementById("phoneErr").innerHTML=" ";
    }

}

/*function format_phone(){
    var phone = document.getElementById("phone");
    phone.value = phone.value.replaceAll(phone.value.trim(),"-","");
    if(phone.value.length >3 && phone.value.length <=6) {
        phone.value = phone.value.slice(0,3) + "-" + phone.value.slice(3);
    }
    else if(phone.value.length > 6){
        phone.value = phone.value.slice(0,3) + "-" + phone.value.slice(3,6) + "-" + phone.value.slice(6);

    }
}*/
function phoneNumberFormatter() {

    const inputField = document.getElementById("phone");
    inputField.value = formatPhoneNumber(inputField.value);
}
function formatPhoneNumber(value) {

    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;

    if (phoneNumberLength < 7) {
        return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6,12)}`;
}



function length(){
    document.getElementById("user_name").onblur = checkLength;
    document.getElementById("first_name").onblur=check_name;
    document.getElementById("last_name").onblur=check_name;
    document.getElementById("address1").onblur=check_address;
    document.getElementById("address2").onblur=check_address;
    document.getElementById("city").onblur=check_city;
    document.getElementById("zip").onblur=check_zipcode;
    document.getElementById("phone").onblur=check_phone;
}




