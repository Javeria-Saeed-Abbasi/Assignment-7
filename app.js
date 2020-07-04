function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}
function clearBtn(){
    var result = document.getElementById("result");
    result.value = "";
}
function backSpace(){
    var result = document.getElementById("result");
    result.value = result.value.substr(0, result.value.length - 1);
}
function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}
