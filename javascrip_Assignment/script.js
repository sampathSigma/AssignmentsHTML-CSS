function phoneNumber(adding)
{
    var phoneNo = /^\d{10}$/;
    if(adding.value.match(phoneNo))
    {
        alert("Successful");
        return true;
    }
    else
    {
        alert("Not a valid Phone Number");
        return false;
    }
}