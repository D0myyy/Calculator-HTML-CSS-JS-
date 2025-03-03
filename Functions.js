const display = document.getElementById("text");

function displayButton(input){
    if(display.value != "Error"){
        display.value += input;
    } else {
        display.value = "";
        display.value += input;
    }
    
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value = "";
}