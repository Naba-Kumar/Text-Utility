import './App.css';
import Navbar from './modules/Navbar';
import Textutils from './modules/Textutils';
import { useState } from 'react';

function App() {
  const [styling, updatestyle] = useState({
    color: 'light',
    backgroundColor: 'dark'
  })

  const [buttonm, updatebutton] = useState('Light Mode');



  const upModefunc=()=>{
    if(styling.color==='dark'){
        updatestyle({
            color:"light",
            backgroundColor:"dark"
          })
          updatebutton('Dark Mode')
          
        }
        else{
          updatestyle({
            color:'dark',
            backgroundColor:'light'
          })

          updatebutton('Light Mode')
    }
}
const clr = styling.color;

  
  console.log(`app.js-${clr}`);
  return (
    <div style={{backgroundColor:(styling.backgroundColor==='light')?'#1a2723':'#fff3d9', minHeight:'100vh', overflowY:'auto'}}>
    
      <Navbar mode={styling} tooglefunc={upModefunc} />

      <div className='container , mt-90'>

      <Textutils mode={styling} buttonm={buttonm} tooglefunc={upModefunc} />

      </div>

      {/* <Body mode={styling} tooglefunc={upModefunc} /> */}
    </div>
  );
}

export default App;
