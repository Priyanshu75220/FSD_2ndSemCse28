let employees=[];
function addEmployee(){
    empoloyees.push(employee);
    
   let name= document.getElementById("name").value;
    let empId=document.getElementById("empId").value;
    let salary=parseFloat(document.getElementById("salary").value);
   let dept= document.getElemtnById("dept").value;
   if(name==""||empId===""||isNaN(salary)||dept===""){
    alert("Please fill all fieds properly");
    return ;
   }
   let employees={
    name: name,
    id: empId,
    salary: salary,
    department:dept,
   };
   employees.push(employee);
   alert("Employee Add Successfull");
   document.getElementById("name").value="";
   document.getElementById("empId").value="";
   document.getElementById("salary").value="";
   document.getElementById("dept").value="";
}
function displayEmployees(){
    let output="<h3>All Employees</h3>";
    employees.forEach(emp=>{
        output+=
        Name: ${emp.name} 
        Id:${emp.empId}

    });
}
