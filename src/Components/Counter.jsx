import React, { useState } from 'react'
import '../Components/Counter.css'

const Counter = () => {

const [count , setCount] = useState(0);

const [mainCount , setMainCount] = useState(0)


function updateHandle(){

    if(count < 108){
        setCount(count+1)
    }

        if(count === 108){

            setMainCount(mainCount+1)
            setCount(1)

        }
    
}




function handleClick(){

    if(count > 0){

        setCount(count => count-1)
    }
}

function restHandle(){
setCount(count => count-count)
setMainCount(count=> count-count)
}

  return (
    <div className='second-container'>

        

        

        <div className='round'> <div className='count' onClick={updateHandle} >{count}</div>


          </div>
          <div className='main-count' >Total Counts : {mainCount}</div>
        
      <div className='allbtn'>
        
 
    <button onClick={restHandle} className='btn3'>Reset</button>

    </div>  
   


    </div>
  )
}

export default Counter