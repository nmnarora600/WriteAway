import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Textarea(props) {
    const [Text, SetText] = useState("");
    const handleUppercase=()=>{
        let newtext=Text.toUpperCase();
        SetText(newtext);
        props.showAlert("Converted to UpperCase", 'success');
    }
    const handleLowercase=()=>{
        let newtext=Text.toLowerCase();
        SetText(newtext);
        props.showAlert("Converted to LowerCase", 'success');
    }
    const handleClearText=()=>{
        SetText("");
        props.showAlert("Text Cleared", 'success');
    }
    const handleCopyText=()=>{
        var newtext=document.getElementById('mybox');
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        props.showAlert("Text Copied", 'success');
    }

    const handleextraspaces=()=>{
        let newtext=Text.split(/[ ]+/);
        SetText(newtext.join(" "));
        props.showAlert("Spaces Adjusted", 'success');
    }
    const handleOnChange=(event)=>{
        SetText(event.target.value);
    }
    

  return (
    
    <>
    <div className={`container text-${props.mode==="dark"?"light":'dark'}`} data-bs-theme={props.mode}>       
        <div className="mb-3">
            <h2 className='my-3'>{props.heading}</h2>
            <textarea className="form-control" value={Text} onChange={handleOnChange} id="mybox" rows="6"></textarea>
        </div>
        <button disabled={Text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1 my-1`} onClick={handleUppercase} >Convert To Uppercase</button>
        <button disabled={Text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1 my-1`}onClick={handleLowercase} >Convert To Lowercase</button>
        <button disabled={Text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1 my-1`} onClick={handleClearText} >Clear Text</button>
        <button disabled={Text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1 my-1`} onClick={handleCopyText} >Copy Text</button>
        <button disabled={Text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1 my-1`} onClick={handleextraspaces} >Remove Extra Spaces</button>
    </div>

    <div className={`container text-${props.mode==="dark"?"light":'dark'}`} data-bs-theme={props.mode}>
        <h2 className='my-4'>Text Summary</h2>
        <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length} words {Text.length} characters</p>
        <p>{0.008 * (Text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes Read</p>
        <h3>Preview</h3>
        <p>{Text}</p>
    </div>
    </>
    
  )
}

Textarea.defaultProps={
    heading: 'Enter Header Here'
}
Textarea.propTypes={
    heading: PropTypes.string
}
