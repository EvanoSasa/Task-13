var p_input = document.getElementById("first-name");
var mybutton = document.getElementById("btn");
var x = 2;

function name(){  
    if(x == 2){
        p_input.innerHTML = "Samuel Eid";
    }
    else{
        p_input.innerHTML = "false";
    }
}

mybutton.onclick = function(){
    name();
    mybutton.innerHTML = "Wellcome";
}




