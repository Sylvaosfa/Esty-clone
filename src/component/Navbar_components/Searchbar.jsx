"use client"

import React from 'react'
import { SearchVideos } from '@/utils/fetchData'
import { useState } from 'react'

const Searchbar = () => {
  const [ loading, setLoading ] = useState(false)
  const [ result, setResult ] = useState([])
  const [ ask, setAsk ] = useState("")
  
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true)
  
  const data = await SearchVideos(`search/?query=${ask}`)
    console.log(data)
    setResult(data) 
    setLoading(false)
  }
  
  return (
    <div>
     <form onSubmit={handleSearch}>
     <input type="text" placeholder='search..' 
     value={ask}
     onChange={(e) => setAsk(e.target.value)}
     />
     <button>
      search  
     </button>
     </form>

  {
  loading ? <p>Loading...</p>: null
  }
     
    </div>
  )
}

export default Searchbar
