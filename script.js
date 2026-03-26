function predict(){

let study = document.getElementById("study").value
let attendance = document.getElementById("attendance").value
let marks = document.getElementById("marks").value

let result=""

if(study>=2 && attendance>=70 && marks>=30){
result="PASS"
}
else{
result="FAIL"
}

document.getElementById("result").innerHTML="Prediction: "+result
}