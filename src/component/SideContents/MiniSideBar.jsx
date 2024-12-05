import React from 'react'
import styles from './Sidebar.module.css'
import Image from 'next/image'
const MiniSideBar = () => {
  return (
    
    <div className={styles.SideBar}>
      
<div className={styles.home}>
  <Image src='/IMG-20241202-WA0079.jpg' width={20} height={20} alt='image' />   
  <h1>Home</h1>
  </div>
<div className={styles.home}>
  <Image src='/IMG-20241202-WA0081.jpg' width={20} height={20} alt='image' />
  <h1>Shorts</h1>
  </div>
<div className={styles.home}>
  <Image src='/IMG-20241202-WA0080.jpg' width={20} height={20} alt='image' />
  <h1>Subscriptions</h1>
  </div>
<div className={styles.home}>
  <Image src='/IMG-20241202-WA0082.jpg' width={20} height={20} alt='image' />
  <h1>You</h1>
  </div>

  </div>
  )
}

export default MiniSideBar
