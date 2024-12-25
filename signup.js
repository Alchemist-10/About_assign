

const submit=document.getElementById("sub");
const reset= document.getElementById("reset");

submit.onclick=function()
{
    
const fname= document.getElementById("fname").value;
const lname= document.getElementById("lname").value;
const uname=document.getElementById("uname").value;
const cp =document.getElementById("cpass").value;
const conpass =document.getElementById("conpass").value;
const day=document.getElementById("day").value;
const month=document.getElementById("month").value;
const yr= document.getElementById("year").value;
const male=document.getElementById("male").checked;
const female=document.getElementById("female").checked;
const mph=document.getElementById("mph").value;
const ema=document.getElementById("ema").value;
const location=document.getElementById("loc").value;

    if(!fname ||!lname ||!uname ||!cp ||!conpass||!day ||!month ||!yr ||(!male && !female) ||! mph ||!ema ||!location)
    {
        window.alert(`Please enter all the details till location`);
        return;
    }
    
    else if(conpass!=cp)
        {
            alert(`Passwords doesn't match :(`);
            return;
        }

    alert("Form submitted successfully :)");
};
reset.onclick=function(){
    document.getElementById("signupform").reset();
};
