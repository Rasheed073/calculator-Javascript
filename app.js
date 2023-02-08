function getHistory(){
    return document.getElementById("history-value").innerText
}
function printHistor(num){
    document.getElementById("history-value").innerText=num
}
function getoutput(){
    return document.getElementById("output-value").innerText
    
}

function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num
    }else{    document.getElementById("output-value").innerText= getFormattedNumber(num)
}
}

function getFormattedNumber(num){
    var n = Number(num)
    var value = n.toLocaleString("en")
    return value
}
printOutput("3456789")

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''))
}
alert(reverseNumberFormat(getoutput()))