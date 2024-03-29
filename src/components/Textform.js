import React ,{useState}from 'react'

export default function Textform(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }

    const handleTitleClick = () => {
        let newText = '';
        const words = text.split(" ");
    
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            if (word.length > 0) {
                newText += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
            }
        }
    
        setText(newText.trim());
        props.showAlert("Converted to TitleCase","success")
    }

    const handleinvCaseClick = ()=>{
        let newText = '';
        for(let i = 0;i < text.length;i++){
            const char = text[i];
            if(char === char.toLowerCase()){
                newText += char.toUpperCase();
            }
            else if(char === char.toUpperCase()){
                newText += char.toLowerCase();
            }
            else{
                newText += char;
            }
        }
        setText(newText);
        props.showAlert("Converted to InverseCase","success")
    }

    //Using Regex Concept in javascript
    const handleExtraSpaces = ()=>{
        let newtext =  text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extraspaces Removed","success")
    }

    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!","success")
    }

    const handleClearClick = ()=>{
        setText(' ')
        props.showAlert("Text Cleared","success")
    }

    const handleOnChange = (event)=>{
       //console.log("onchange")
        setText(event.target.value) //when ever user changes then that event + previous event will takes place
    }

    const [text, setText] = useState('');
    //text = "new state";//wrong way to change the text
    //setText("new text");//correct way to change the text
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark' ?  'white':'#042743'}}>
        <h2 className='mb-4'>{props.heading}</h2>

        <div className="mb-3">
            <textarea className="form-control"  value ={text} onChange = {handleOnChange} style={{backgroundColor:props.mode === 'dark' ?  '#2b4e5a':'white',color :props.mode === 'dark' ?  'white':'#042743' }}id="Box1" rows="8"></textarea>
        </div>

        <button type="button" disabled={text.length === 0}className="btn btn-primary mx-1 "onClick={handleUpClick}>Convert to Uppercase</button>

        <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1 "onClick={handleLoClick}>Convert to Lowercase</button>

        <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1 "onClick={handleTitleClick}>TitleCase</button>

        <button type="button" disabled={text.length === 0}  className="btn btn-primary mx-1 my-1 "onClick={handleinvCaseClick}>InvCase</button>

        <button type="button"disabled={text.length === 0}  className="btn btn-primary mx-1 my-1 "onClick={handleExtraSpaces}>Remove Extraspaces</button>

        <button type="button" disabled={text.length === 0}  className="btn btn-primary mx-1 my-1 "onClick={handleCopyClick}>Copy Text</button>

        <button type="button" disabled={text.length === 0}  className="btn btn-primary mx-1"onClick={handleClearClick}>Clear</button>

  </div>

    <div className="container my-3" style={{color:props.mode === 'dark' ?  'white':'#042743'}}>
        <h4>Your Text Summary</h4>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length } words and {text.length} characters</p>
        <p>{0.08*text.split(/\s+/).filter((element)=>{ return element.length !== 0}).length} Minutes read</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
    </div>
  </>
  )
}
