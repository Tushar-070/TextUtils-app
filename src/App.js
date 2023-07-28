// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import TextForm from './component/TextForm';
import About from './component/About';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const [mode, setMode] = useState('light');//weather dark mode is enabled or not
  const [alert, setAlert] = useState(null)
  const [newColor, setNewColor] = useState({
    backgroundColor: 'red',
    border: 'none',
    borderRadius: '100%',
    color: 'red'
  })
  const colorChange = () => {
    if (mode === 'light') {
      setNewColor({
        backgroundColor: 'white',
        border: 'none',
        borderRadius: '100%',
        color: 'white'
      })
      setMode('danger')
      document.body.style.backgroundColor = '#7e4146'
      showAlert('Danger mode has been enabled', 'success')
    }
    else {
      setNewColor({
        backgroundColor: 'red',
        border: 'none',
        borderRadius: '100%',
        color: 'red'
      })
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled', 'success')

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }
  return (
    <>
     <Navbar title="TextUtils" aboutText='About' mode={mode} toggleMode={toggleMode} newColor={newColor} colorChange={colorChange} />
        <Alert alert={alert} />
  
        <div className="container my-3">
          {/* <TextForm Heading="Try TextUtils-Word Counter, Charecter Counter, Remove exter spaces" mode={mode} showAlert={showAlert} /> */}
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>
            <Route  path="/">
              <TextForm Heading="Try TextUtils-Word Counter, Charecter Counter, Remove exter spaces" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
    </>
    
  );
}

export default App;
