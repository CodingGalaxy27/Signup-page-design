//mapping
import './App.css';
import Hea from './Hea';
import './Nar.css';
import Usest from './Usest';
import Task from './Task';
import Todo from './Todo';
import { useState } from 'react';
import Naruto from './Naruto';

import Samp from './Samp';
function App() { 
const [showtext,setShowtext]=useState(false);//input box  irrukathu  falsela irruku usestate
 
 

  return (
    <div className='App'>
     
      <Naruto/>
    
    


    </div>
   
  
  
  
  );
}


export default App;
