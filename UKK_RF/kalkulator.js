function appenNumber(num){
    document.getElementById('display').value += num;
}
function appenOperator(operator){
    document.getElementById('display').value += operator;
}
function clearDisplay(){
    document.getElementById('display').value = '';
}
function deleteOne(){
    document.getElementById('display').value = display.value.slice(0,-1);
}
function calculateResult(){
    const displayValue = document.getElementById('display').value;
    try{
        const result = eval(displayValue)
        document.getElementById('display').value = result;
    }
    catch(error){
        document.getElementById('display').value = "Error!";
    }
    if(displayValue == 0){
        document.getElementById('display').value = '';
    }
}