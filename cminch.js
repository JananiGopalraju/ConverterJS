function convert()
{    
let cm = Number(document.getElementById("input").value);
let inches = cm/2.54
let result = document.getElementById("result")
result.innerText = inches.toFixed(2) +"inches"
}