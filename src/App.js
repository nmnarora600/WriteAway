import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import Alert from './Components/Alert';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//To set dark Light Mode
function App() {
const[mode, setMode] =useState('light')

const toggleMode=()=>{
  if(mode==='dark'){ 
    setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("Darkmode is Disabled", 'success')
}
 
  else{
    setMode('dark');
    document.body.style.backgroundColor='#6c757d';
    showAlert("Darkmode is Enabled", 'success')
  }
}

// To send Alert
const[alert, setAlert]= useState(null);
function showAlert(message, type){
setAlert({
  msg:message,
  type:type
})

setTimeout( ()=>{
setAlert(null);
},1500)
}
  return (
    <>
    <Router><Navbar title ='WriteAway' main='Home' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        
        <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
         
          <Route path="/" element={<Textarea heading="Enter your Text" showAlert={showAlert} mode={mode} toggleMode={toggleMode}/>}/>
      
        </Routes>

        </Router>
    </>
  );
}

export default App;
