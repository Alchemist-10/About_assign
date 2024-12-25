
document.getElementById("lb").onclick=function(){
       const email= document.getElementById("ema").value
       const pass=document.getElementById("pas").value
       if(email && pass)
              {
              if( email==="abc" && pass==="abc")
       {      
               window.alert(`You have succesfully logged in :)`);
       }
       else{
              window.alert('Incorrect username or password :( \n\nHint:abc');
       }
              }
else{
       window.alert(`please enter both email and password`);
}
};