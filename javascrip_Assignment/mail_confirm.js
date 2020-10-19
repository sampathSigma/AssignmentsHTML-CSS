/*function ValidateEmail(inputText)
{
    var format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.value.match(format))
    {
        alert("Valid email address!");
        document.form1.Name.focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        document.form1.Name.focus();
        return false;
    }
   
}*/
function validateMail(p1,p2) {
    
    if (p1.value != p2.value || p1.value == '' || p2.value == '') {
        p2.setCustomValidity('email incorrect');
    } else {
        p2.setCustomValidity("");
    }
}


/*function confirmPass() {
    var mail = document.getElementById("mail").value
    var confMail = document.getElementById("c_mail").value
    if(mail != confMail) {
        alert('Wrong confirm email !');
        return false;
    }
    else {
        alert('confirmed!!!')
    }
}
 */



