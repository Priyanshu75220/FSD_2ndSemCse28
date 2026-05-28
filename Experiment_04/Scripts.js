function calculateResult(){
    let n =document.getElementById("subject").value;
    if(n<1){
        return 0;
    }
    let total=0;
    let marks;
    let SubjectsMarks="";
    for(let i=0;i<n;i++){
        marks=parseFloat(prompt("Enter indivisul subject marks"));
        total=total+marks;
        SubjectsMarks+= "<span>"+"Subject "+(i+1)+" marks="+marks+"<br>"+"</span>";
        
    }
    let average=total/n;
    let grade
    if(average>80){
        grade='A';
    }
    else if(average>70){
        grade='B';
    }
    else if(average>60){
        grade='C';
    }
    else if(average>45){
        grade='D';
    }
    else if(average>33){
        grade='E';
    }
    else{
        grade='F';
    }
    let Result;
    if(average>33){
        Result="passed";
    }
    else{
        Result="failed";
    }
    document.getElementById("result").innerHTML=
    SubjectsMarks+"<br>"+"<hr>"+
   " <span>"+
    "Total marks="+total+
    "<br>Average="+average+
    "<br>Grade="+grade+
    "<br>Result="+Result
    +"</span>";
    
}
function resetResult(){
    document.getElementById("subject").value = "";
    document.getElementById("result").innerHTML = "";
}

