import React, { useState } from 'react';
import './index.css';

const App=()=>
{
  const [val,newVal]=useState(0);
  const inc=()=>
  {
    newVal(val+1);
  };
  const dec = ()=>
  {
    if(val>0)
    {
     newVal(val-1);
    }
    else
      alert("Sorry, zero limit reached");
  };
   return (
     <>
       <div className="main_div">
         <div className="center_div">
           <div className="heading_div">{val}</div>
           <button onClick={dec}>-</button>
           <button onClick={inc}>+</button>
         </div>
       </div>
     </>
   );
};

export default App;