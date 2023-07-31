import React, { useState } from 'react'

export default function TextForm(props) {
    let inputColor={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#597d9e':'white'
    }
    const handleUpClick = () => {
        let n = text.toUpperCase()
        setText(n)
        props.showAlert('Converted to upperCase!', 'success')
    }
    const handleLoClick = () => {
        let n = text.toLowerCase()
        setText(n)
        props.showAlert('Converted to lowerCase!', 'success')
    }
    const handleClear = () => {
        setText("")
        props.showAlert('Text Cleared!', 'success')
        
    }
    const handleCopy = () => {
        let text = document.getElementById("exampleFormControlTextarea1")
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();
        props.showAlert('Copy to Clipboard!', 'success')
    }
    const handleSpace = () => {
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert('Extra Spaces Removed!', 'success')
    }
    const handleOnChange = (e) => {
        console.log("onChange")
        setText(e.target.value)
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className="container">
                <h2 className={`text-${props.mode==='light'?'dark':'light'} mb-2`}>{props.Heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" style={inputColor}  id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1 p-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-2  mx-1 p-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1 p-2" onClick={handleClear}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1 p-2" onClick={handleCopy}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1 p-2" onClick={handleSpace}>Erese extra space</button>
            </div>
            <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
                <h1>Your text summary</h1>
               
                <p>{0.008 * text.split(" ").filter((e)=>{return e.length}).length} Minutes read </p>
                <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words, {text.length}characters</p>
                <h2>Preview</h2>
                <p>{(text==='Enter text here'||text==='')?'Nothing to Preview':text}</p>
            </div>
        </>
    )
}