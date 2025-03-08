const display = document.getElementById("text");

function displayButton(input) {
    const lastChar = display.value.slice(-1);
    if (input >= '0' && input <= '9') {
        if (display.value !== "Error" && display.value.length < 14) {
            display.value += input;
        } else if (display.value.length < 14) {
            display.value = "";
            display.value += input;
        }
    } else if (['+', '-', '*', '/', '.'].includes(input)) {
        if (display.value !== "Error" && display.value.length < 14 && !['+', '-', '*', '/', '.'].includes(lastChar)) {
            display.value += input;
        }
    }
}

function calculate(){
    try{
        if(display.value == "Error"){
            display.value = "";
        } else{
            if(display.value != ""){
                display.value = eval(display.value);
                while(display.value.length > 14){
                    display.value = display.value.slice(0,-1);
                }
                if(display.value == "Infinity"){
                    display.value = "Error";
                }
            }
        }
        
    }
    catch(error){
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value = "";
}
