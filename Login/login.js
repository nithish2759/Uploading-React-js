import React, { Component } from "react"
import "./login.css";
class Login extends Component{
  render(){
    return(
      <div id="multi_step_form">
        <form id="wrapper">
          <div id="content">
            <br/>
            <h2>LOGIN</h2>
            <br/>
            <div>
              <label htmlFor="name">Mail ID :</label>
              <input id="mailid" type="email" onClick="ValidateEmail(document.form1.text1)" placeholder="abc@example.com" required="required"/>
            </div><br/><br/>
            <div>
              <label htmlFor="password">Password:</label>
              <input  id="password" type="password" placeholder="Enter a password" name="password" required="required"/>
            </div>
            <div>
              <input id="showpass" type="checkbox" onClick="myFunction()"/> Show
              <a href="\forgot_pass\forgot.html">Forgot Password ?</a>
            </div>
                <button id="button" onClick="loginbtn()">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
export default Login;

// function ValidateEmail(inputText){
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if(inputText.value.match(mailformat)){
//     alert("Valid email address!");
//     document.form1.text1.focus();
//     return true;
//     }
//     else{
//     alert("You have entered an invalid email address!");
//     document.form1.text1.focus();
//     return false;
//     }
// }
// function myFunction(){
//     var x = document.getElementById("password");
//     if (x.type === "password") {
//       x.type = "text";
//     } 
//     else{
//       x.type = "password";
//     }
// } 
// function loginbtn(){
//   window.location.href = "/dashboard/dashboard.html";
// }
