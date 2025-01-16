import React, { useContext, useState } from 'react'
import { SearchContext } from '@/contexts/SearchContext'
import styles from './Feeds.module.css'
import { getSubtitle } from '@/utils/fetchData'
const Feeds = () => {

  const { result, setResult } = useContext(SearchContext)
  // state to track video playing
  const [ playingVideo, setPlayingVideo ] = useState(null) 
  const [ hoveredVideo, setHoveredVideo ] = useState(null)
  // function to play video related to the thumbnails
  const handlePlayVideo = (videoid) => {
    setPlayingVideo(videoid)
  }

  const handleMouseEnter = (videoId) => {
    setHoveredVideo(videoId)
  }

  const handleMouseLeave = () => {
    setHoveredVideo(null)
  }

  const handleshowsubtitle = async (videoID) =>{
    const subtitle = await getSubtitle(videoID)
    console.log(subtitle);
  }    
  return (
    <div className={styles.container}>
   {
    result.map((eachItem, index, array) => (
      <div key={index} className={styles.content}>
     {
      hoveredVideo === eachItem.video_id ?(
      <iframe 
      src={`https://www.youtube.com/embed/${eachItem.video_id}?
      autoplay=1`} 
      allow="autoplay"
        allowFullScreen
        >
      </iframe>
    ):
    playingVideo === eachItem.videoId ?
    <div>

      <iframe 
      src={`https://www.youtube.com/embed/${eachItem.video_id}?autoplay=1`} 
      allow="autoplay"
        allowFullScreen
        >
        </iframe>

    </div>
        :
      (
        <div className={styles.Text}>
        <img src={eachItem.thumbnails[0].url} alt="image" onClick=
        {() => handlePlayVideo(eachItem.video_id)} 
        onMouseEnter={() => handleMouseEnter(eachItem.video_id) && handleshowsubtitle(eachItem.video_id)}
        onMouseLeave={() => handleMouseLeave}
        />
        </div>
      )
     }
     <h1>{eachItem.title}</h1>
        <p>{eachItem.description}</p>
        <p>{eachItem.video_length}</p>
        <p>{eachItem.number_of_views}{eachItem.published_time}</p>
      </div>
    ))
   }

    </div>
  )
}

export default Feeds
  