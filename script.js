async function predict(){

let hours=document.getElementById("hours").value
let attendance=document.getElementById("attendance").value
let internal=document.getElementById("internal").value

let response = await fetch("/api/predict",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
hours:hours,
attendance:attendance,
internal:internal
})
})

let data=await response.json()

let grade=""

if(data.prediction>=80) grade="A"
else if(data.prediction>=60) grade="B"
else if(data.prediction>=40) grade="C"
else grade="Fail"

document.getElementById("result").innerHTML=
`Predicted Marks: ${data.prediction}<br>
Grade: ${grade}`

createChart(hours,attendance,internal,data.prediction)

}

function createChart(h,a,i,p){

new Chart(document.getElementById("chart"),{
type:"bar",
data:{
labels:["Study Hours","Attendance","Internal","Prediction"],
datasets:[{
label:"Performance Analysis",
data:[h,a,i,p]
}]
}
})

}
