"use client"

import React from 'react'
import { SearchVideos } from '@/utils/fetchData'
import { useState, useContext} from 'react'

import { SearchContext } from '@/contexts/SearchContext'
import Image from 'next/image'
const Searchbar = () => {

  const { result, setResult } = useContext(SearchContext);

  const [ loading, setLoading ] = useState(false)

  //const [ result, setResult ] = useState([])
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
    <div
       style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "20px",
          padding: "5px 10px",
          width:  "600px",
          marginLeft: "120px"
       }}
    >
     <form onSubmit={handleSearch}>
     <input type="text" placeholder='search...' 
    style={{
      flex:1,
      border:"none",
      fontSize:"14px",
      padding:"5px",
      borderRadius:"20px",
      backgroundColor:"transparent",
      width:"500px"

    }}
     value={ask}
     onChange={(e) => setAsk(e.target.value)}
     />
     <button className='search'>
        <Image src='/icons8-search-48.png' width={25} height={25} alt='image' />
     </button>
     </form>
 
  {
  loading ? <p>Loading...</p>: null
  }
     
      {/* {
        result .map((a,b) =>
        (
          <div key={b}>  
            <h1 className='text-red-500'>
            {a.title}
            </h1>
            <p>{a.video_length}
            </p>
            <p>{a.number_of_views}</p>

            <img src={a.thumbnails[0].url} 
            alt="image" />
          </div>
        ))
      } */}
    
    </div>
  )
}
 
export default Searchbar
