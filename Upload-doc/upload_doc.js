import React,{Component} from "react";
import "./upload_doc.css";
class Upload_doc extends Component{
// uploadFile(name){
//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", " ");
//   xhr.upload.addEventListener("progress", ({loaded, total}) =>{
//     let fileLoaded = Math.floor((loaded / total) * 100);
//     let fileTotal = Math.floor(total / 1000);
//     let fileSize;
//     (fileTotal < 1024) ? fileSize = fileTotal + " KB " : fileSize = (loaded / (1024*1024)).toFixed(2) + " MB ";
//     let progressHTML = `<li class="row">
//                           <i class="icon fas fa-file-alt"></i>
//                           <div class="content">
//                             <div class="details">
//                               <span class="name">${name}  Loading</span>
//                               <span class="percent">${fileLoaded}%</span>
//                             </div>
//                             <div class="progress-bar">
//                               <div class="progress" style="width: ${fileLoaded}%"></div>
//                             </div>
//                           </div>
//                         </li>`;
//     uploadedArea.classList.add("onprogress");
//     progressArea.innerHTML = progressHTML;
//     if(loaded == total){
//       progressArea.innerHTML ="";
//       let uploadedHTML = `<li class="row">
//                             <div class="content upload">
//                               <i class="icon fas fa-file-alt"></i>
//                               <span class="name">${name}</span>
//                               <span class="size">${fileSize}</span>
//                             </div>
//                           </li>`;
//       uploadedArea.classList.remove("onprogress");
//       uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
//     }
//   });
//   let data = new FormData(form);
//   xhr.send(data);
// }
enableButton=()=>{
  document.getElementById("myButton").disabled = true;
}
Buttonenable(){
  document.getElementById("Button").disabled = false;
}
Button(){
  document.getElementById("myButton").disabled = false;
}
myFunction=()=>{
  alert("All the files are Uploaded Successfully ?");
  window.location.href = "/dashboard/dashboard.js";
}
render(){
  return(
  <div className="multi_step_form">
    <div id="msform">
      <div className="header">
        <header>UPLOAD A DOCUMENT</header>
      </div>
      <fieldset>
        <form className="wrapper">
          <div>
            <label htmlFor="table">Choose a category : </label>
            <select className="category" name="table">
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
              <option value="other">Other</option>  
            </select>
            <br/><br/>
            <label htmlFor="name">File Name : </label>
            <input className="wrap" required="required" placeholder="Enter a file name..." type="text" name="name" maxLength="15"/>
          </div><br/>
          <input required="required" className="file-input" type="file" accept=".pdf" name="pdf_file"/>
          <div>
            <p id="para">* Upload a Document below 1MB</p>
          </div><br/>
          <input onClick={this.enableButton} required="required" className="submit_button" type="submit" name="submit"/> 
        </form><br/>
        <button onClick={this.myFunction} type="button" id="button" className="complete-button">Complete</button>
  </fieldset>
  </div>
</div>
  )
}
}
export default Upload_doc;