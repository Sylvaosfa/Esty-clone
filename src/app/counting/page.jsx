"use client"
import React from 'react'
import { useState, useEffect} from 'react'

const page = () => {
    let [ count, setCount] = useState(0);
    const add = () => {
        setCount (count++)
    }
    const subtract = () => {
        setCount (count--)
    }

    useEffect(() => {
        alert(`The current state is ${count}`)
    }, [count])

  return (
    <div style={{textAlign: 'center', margin: '45px', } }>
     
     <h1>The current state is {count}</h1>

      <button onClick={add} style={{margin: '5px', borderRadius: '10px', backgroundColor: '#56a', padding: '10px', color: '#fff' }}>Increase</button>
      <button onClick={subtract} style={{margin: '5px', borderRadius: '10px', backgroundColor: '#56a', padding: '10px', color: '#fff' }}>Decrease</button>
     
    </div>
  )
}



export default page
