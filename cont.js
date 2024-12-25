const sendbutt=document.getElementById("sendmsg");

sendbutt.onclick=function(){
    const name= document.getElementById("name").value;
    const email= document.getElementById("email").value;
    if(email && name)
    {
        window.alert(`You have succesfully entered the details. :)`);
    }
    else{
        window.alert(`Please Enter both name and email`);
    }
};