import { useState } from 'react';
import './App.css';

function App() {
  const [styles,setStyle] = useState(
    {
      width:"100%",
      height:"100vh",
      backgroundColor:"#18bc9c"
    }
  )
  return (
    <div style={styles} className="d-flex justify-content-center align-items-center">
      
        <div style={{border:"solid black 1px"}} className='bg-light p-3 rounded w-50 d-flex justify-content-between align-items-center'>
          <button onClick={()=>setStyle({...styles,backgroundColor:"#e74c3c"})} className='btn btn-danger'>Red</button>
          <button onClick={()=>setStyle({...styles,backgroundColor:"#2c3e50"})} className='btn btn-primary'>Black</button>
          <button onClick={()=>setStyle({...styles,backgroundColor:"#95a5a6"})} className='btn btn-secondary'>Hash</button>
          <button onClick={()=>setStyle({...styles,backgroundColor:"#3498db"})} className='btn btn-info'>Blue</button>
          <button onClick={()=>setStyle({...styles,backgroundColor:"#f39c12"})} className='btn btn-warning'>Yellow</button>
          <button onClick={()=>setStyle({...styles,backgroundColor:"#ecf0f1"})} className='btn btn-light border'>white</button>
          <button onClick={()=>setStyle({...styles,backgroundColor:"#18bc9c"})} className='btn btn-success '>Green</button>
        </div>
       
      
    </div>
  );
}

export default App;
