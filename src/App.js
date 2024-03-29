import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React,{ useState} from 'react';
import Alert from './components/Alert';
// import {BrowserRouter,Route, Routes,} from "react-router-dom";


function App() {
  const [mode,setmode] = useState('light');
  const [alert,setalert] = useState(null);

  const showAlert =(message,type) =>{
    setalert({
      msg : message,
      type : type
    });

    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';//'#212529'
      showAlert('Dark Mode has Enabled','success');
      //document.title = 'TextUtils - Dark Mode';

      //Not Good User Experience
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install it Now';
      // }, 1500);


    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has Enabled','success');
      //document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>  
    {/* <BrowserRouter> */}
      <Navbar title = "TextUtils" aboutText = "About" mode ={mode} toggleMode = {toggleMode}/>

      <Alert alert = {alert}/>
      <Textform showAlert ={showAlert} heading = "Try TextUtils - Word Counter , Character Counter , Case Converter ,  Remove extra spaces" mode ={mode}/>
      {/* <Routes> */}
        {/* <Route path ="/" element = {}/> */}
        {/* <Route path ="/about" element = {<About mode ={mode} />}/>
      </Routes> */}
  {/* </BrowserRouter> */}
</>
  );
}


export default App;
