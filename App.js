import React,{Component} from 'react'
    const downloadTxtFile = () => {
        const texts = []

        const file = new Blob(texts, {type: 'pdf'});

        const element = document.createElement("a");

        element.href = URL.createObjectURL(file);

        element.download = Date.now() + ".img";

        document.body.appendChild(element);

        element.click();
    }
export default class App extends Component{
    render(){
        return(
            <div>
                <div>
                    <input type="file"></input>
                    <button id="downloadBtn" onClick={downloadTxtFile} value="download">Download</button>
                </div>
            </div>
        )
    }
}