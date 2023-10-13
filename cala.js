let cal=document.getElementById("action");

function display(num){
     cal.value += num;
}

function Clear(){
     cal.value ="";
}


function del(){
    cal.value=cal.value.slice(0,-1)
}

function calculator() {
     var value1= document.getElementById('action').value;
     let value2 = eval(value1);
     document.getElementById('action').value=value2;
}