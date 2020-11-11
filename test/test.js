window.onload=windowOnload()
var account=document.getElementById('id');
var logIn=document.getElementById('login');

function logInonClick(){
    logIn.onclick();
    if (account == "a"){
        window.alert("Wrong!");
    }
}