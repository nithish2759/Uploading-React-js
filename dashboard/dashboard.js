import React,{Component} from 'react';
// window.history.forward();
// function openNav() {
//   document.getElementById("mySidenav").style.display = "block";
//   }
// function closeNav() {
//   document.getElementById("mySidenav").style.display = "none";
//   }
// function noBack() {
//     window.history.forward();
// }
class Dashboard extends Component{
  render(){
    return(
      <div>
        {/* <span style="font-size:30px;cursor:pointer" onClick="openNav()">&#9776;</span> */}
        <h1>Choose a category</h1>
        {/* <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a> */}
        <a href="#">1.</a>
        <a href="#">2.</a>
        <a href="#">3.</a>
        <a href="Login/login.html" target="_self">Logout</a>
        <a className="upload" href="/upload_page/upload_page.html">Upload</a>
        <a className="digital" href="/digital_sign/digital_sign.html">Digital signature</a>
    </div>
    )
  }
}
export default Dashboard;