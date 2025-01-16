import React from 'react'
import styles from './Maxi.module.css'
import Image from 'next/image'
const MaxiSideBar = () => {
  return (

    <div className= {styles.Inputbar}>
      
    <div className= {styles.home2}>
      <Image src='/icons8-home-24.png' width={20} height={20} alt='image' />
      <h1>Home</h1>
    </div>
  <div className={styles.home2}>
    <Image src='/icons8-youtube-shorts-50.png' width={20} height={20} alt='image' />
     <h1>Shorts</h1>
  </div>
  <div className={styles.home2}>
     <Image src='/icons8-video-playlist-50.png' width={15} height={15} alt='image' />
      <h1>Subscriptions</h1>
  </div>
  <div className={styles.home2}>
  <h1>You</h1>
     <Image src='/icons8-forward-48.png' width={15} height={15} alt='image' />
  </div>
  <div className={styles.home2}>
     <Image src='/icons8-timer-24.png' width={15} height={15} alt='image' />
      <h1>History</h1>
  </div>
  <div className={styles.home2}>
     <Image src='/icons8-playlist-24.png' width={15} height={15} alt='image' />
      <h1>Playlists</h1>
  </div>
  <div className={styles.home2}>
     <Image src='/icons8-youtube-50.png' width={15} height={15} alt='image' />
      <h1>Your videos</h1>
  </div>
  <div className={styles.home2}>
     <Image src='/icons8-timer-24.png' width={13} height={15} alt='image' />
      <h1>Watch Later</h1>
  </div>
  <div>
  <h2>Subscriptions </h2>
  </div>
    </div>
  )  
}

export default MaxiSideBar
