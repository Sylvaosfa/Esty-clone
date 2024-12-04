import React, { useContext, useState } from 'react'
import { SearchContext } from '@/contexts/SearchContext'
import styles from './Feeds.module.css'

const Feeds = () => {

  const { result, setResult } = useContext(SearchContext)
  // state to track video playing
  const [ playingVideo, setPlayingVideo ] = useState(null) 
  
  // function to play video related to the thumbnails
  const handlePlayVideo = (videoid) => {
    setPlayingVideo(videoid)
  }
  return (
    <div className={styles.container}>
   {
    result.map((eachItem, index, array) => (
      <div key={index} className={styles.content}>
     {
      playingVideo === eachItem.video_id ?
      <iframe src={`https://www.youtube.com/embed/${eachItem.video_id}`} 
      frameborder="0">
      </iframe>
      :
      (
        <div className={styles.Text}>
        <img src={eachItem.thumbnails[0].url} alt="image" onClick=
        {() => handlePlayVideo(eachItem.video_id)} />
        <h1>{eachItem.title}</h1>
        <p>{eachItem.description}</p>
        <p>{eachItem.video_length}</p>
        <p>{eachItem.number_of_views}{eachItem.published_time}</p>
        </div>
      )
     }
       
      </div>
    ))
   }

    </div>
  )
}

export default Feeds
