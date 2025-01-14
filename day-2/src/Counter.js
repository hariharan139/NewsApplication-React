import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    return (
        <div className='container'>
            <div className='card'>
                <h1>counter app</h1>
                <h2>Counter - {count}</h2>
                <button onClick={()=> setCount(count+1)}>Increment</button>
                <button onClick={()=> setCount(count-1)} disabled={count ===0}>Decrement</button>
                <button onClick={()=> setCount(0)} disabled={count===0}>Reset</button>

            </div>
            
        </div>
    )
}

export default Counter
