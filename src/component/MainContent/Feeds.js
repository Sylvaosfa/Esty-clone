import React, { useContext } from 'react'
import { SearchContext } from '@/contexts/SearchContext'
import styles from './Feeds.module.css'

const Feeds = ({cou}) => {

  const { result, setResult } = useContext(SearchContext)
  return (
    <div className={styles.container}>
   {
    result.map((eachItem, index, array) => (
      <div key={index} className={styles.content}>
           <img src={eachItem.thumbnails[0].url}alt="image" />
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
