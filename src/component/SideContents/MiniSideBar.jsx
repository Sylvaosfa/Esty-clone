import React from 'react'
import styles from './Sidebar.module.css'
import Image from 'next/image'
const MiniSideBar = () => {
  return (
    
    <div className={styles.SideBar}>
      
<div className={styles.home}>
  <Image src='/icons8-home-24.png' width={20} height={20} alt='image' />   
  <h1>Home</h1>
  </div>   
<div className={styles.home}>
  <Image src='/icons8-youtube-shorts-50.png' width={20} height={20} alt='image' />
  <h1>Shorts</h1>
  </div>
<div className={styles.home}>
  <Image src='/icons8-youtube-50.png' width={20} height={20} alt='image' />
  <h1>Subscriptions</h1>
  </div>
<div className={styles.home}>
  <Image src='/icons8-person-50.png' width={20} height={20} alt='image' />
  <h1>You</h1>
  </div>

  </div>
  )
}

export default MiniSideBar
