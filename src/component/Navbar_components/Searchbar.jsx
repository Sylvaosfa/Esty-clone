"use client"

import React from 'react'
import { SearchVideos } from '@/utils/fetchData'
import { useState } from 'react'
import Image from 'next/image'

const Searchbar = () => {
  const [ loading, setLoading ] = useState(false)
  const [ result, setResult ] = useState([])
  const [ ask, setAsk ] = useState("")
  
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true)
  
  const data = await SearchVideos(`search/?query=${ask}`)
    console.log(data)
    setResult(data.videos) 
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
     
      {
        result .map((a,b) =>
        (
          <div key={b}>
            <h1>
            {a.title}
            </h1>
            <p>{a.video_length}
            </p>
            <p>{a.number_of_views}</p>

            <img src={a.thumbnails[0].url} 
            nalt="image" />
          </div>
        ))
      }
    
    </div>
  )
}

export default Searchbar
