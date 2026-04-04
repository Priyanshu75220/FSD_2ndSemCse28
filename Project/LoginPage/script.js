let users = JSON.parse(localStorage.getItem("users")) || [];
function change(){
    const content=document.getElementById("content");
    content.classList.toggle("right");
    const reswitch=document.getElementById("signup");
    if(reswitch.textContent==="Sign up"){
        reswitch.textContent="Sign in";
        document.getElementById("account-exist-or-not").textContent="have an account";
        document.getElementById("content").innerHTML=`<div id="login-form">
              <span id="login-para">Create Account</span>
              <span>enter your details</span>
              <br>
              <input type="text" placeholder="Name" id="Name">
              <hr>
              <input type="text number email" placeholder="username or email" id="usernameInput" value=""> 
              <hr>
              <input type="password" placeholder="Create password" id="passwordInput"> 
              <hr>
              <input type="password" placeholder="Confirme password" id="cnfpasswordInput">
              <hr>
              <button id="login-button" onclick="usercreateAccount()">Create Account</button>
              <br><br>
              <div id="switch">
               <span id="account-exist-or-not">don't have an account</span>
              <button id="signup" onclick="change()">Sign in</button>
              </div>
           </div>`;
    }
    else{
        reswitch.textContent="Sign up";
        document.getElementById("account-exist-or-not").textContent="don't have an account";
        document.getElementById("content").innerHTML=`<div id="login-form">
              <span id="login-para">Login</span>
              <span>enter your account details</span>
              <br>
              <input type="text number" placeholder="username" id="usernameInput" value=""> 
              <hr>
              <input type="password" placeholder="password" id="passwordInput"> 
              <hr>
              <span id="forget">password forget?</span>
              <br>
              <button id="login-button" onclick="userDetails()">Login</button>
              <br><br>
              <div id="switch">
               <span id="account-exist-or-not">don't have an account</span>
              <button id="signup" onclick="change()">Sign up</button>
              </div>
                </div>`;
    }
    const description=document.getElementById("description");
    description.classList.toggle("left");
}
function usercreateAccount(){
        let name=document.getElementById("Name").value;
        let user=document.getElementById("usernameInput").value;
        let pass=document.getElementById("passwordInput").value;
        let cnfpass=document.getElementById("cnfpasswordInput").value;
        if(name==""||user==""||pass==""||cnfpass==""){
            alert("please fill all field");
            return;
        }
        if(pass!==cnfpass){
            alert("does not match password");
            return;
        }
        let userNew={
            name: name,
            username: user,
            password: pass
        };
        users.push(userNew);
        document.getElementById("Name").value="";
        document.getElementById("usernameInput").value="";
        document.getElementById("passwordInput").value="";
        document.getElementById("cnfpasswordInput").value="";
        localStorage.setItem("users", JSON.stringify(users));
        alert("account successfully create");
    }
    function userDetails(){
    let user=document.getElementById("usernameInput").value;
    let pass=document.getElementById("passwordInput").value;
    let found = users.find(u => u.username === user && u.password === pass);
    if(found){
        alert("Login successful ✅");
        document.querySelector('body').innerHTML=`<img src="image/image.png" width="300">`;
    } else {
        alert("Invalid user ❌");
    }
}
