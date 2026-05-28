let employees=[];
function addEmployee(){
   let name= document.getElementById("name").value;
    let empId=document.getElementById("empId").value;
    let salary=parseFloat(document.getElementById("salary").value);
   let dept= document.getElementById("dept").value;
   if(name==""||empId===""||isNaN(salary)||dept===""){
    alert("Please fill all fieds properly");
    return ;
   }
   let emp={
    Name: name,
    Id: empId,
    Salary: salary,
    Department:dept
   };
   employees.push(emp);
   alert("Employee Add Successfull");
   document.getElementById("name").value="";
   document.getElementById("empId").value="";
   document.getElementById("salary").value="";
   document.getElementById("dept").value="";
}
function displayEmployees(){
    let output="<h3>All Employees</h3> <br>";
    employees.forEach(emp=>{
        output+=
       `Name: ${emp.Name} |
        Id: ${emp.Id} |
        Salary:${emp.Salary} |
        Department:${emp.Department}`
        + `<br>`
    });
    document.getElementById("output").innerHTML=output;
}
function filterSalary(){
    let output="<h3>FilterSalary</h3> <br>";
    employees.forEach(emp=>{
        if(emp.Salary>50000){
        output+=
       `Name: ${emp.Name} |
        Id: ${emp.Id} |
        Salary:${emp.Salary} |
        Department:${emp.Department}`
        + `<br>`}
    });
    document.getElementById("output").innerHTML=output;
}
function totalSalary(){
    let output="<h3>TotalSalary</h3> <br>";
    let totalSlary=0;
    employees.forEach(emp=>{
        totalSlary+=emp.Salary;
    });
    document.getElementById("output").innerHTML=`Total Salary:${totalSlary}`;
}
function averageSalary(){
    let output="<h3>AvgSalary</h3> <br>";
    let totalSlary=0;
    let n=0;
    employees.forEach(emp=>{
        totalSlary+=emp.Salary;
        n++;
    });
    let avgSalary= totalSlary/n;
    document.getElementById("output").innerHTML=`Total Salary:${avgSalary}`;
}
