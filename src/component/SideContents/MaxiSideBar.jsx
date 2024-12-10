import React from 'react'
import styles from './Maxi.module.css'
import Image from 'next/image'
const MaxiSideBar = () => {
  return (

    <div className= {styles.Inputbar}>
      
    <div className= {styles.home2}>
      <Image src='/IMG-20241202-WA0079.jpg' width={20} height={20} alt='image' />   
      <h1>Home</h1>
    </div>
  <div className={styles.home2}>
    <Image src='/IMG-20241202-WA0081.jpg' width={20} height={20} alt='image' />
     <h1>Shorts</h1>
  </div>
  <div className={styles.home2}>
     <Image src='/IMG-20241202-WA0080.jpg' width={20} height={20} alt='image' />
      <h1>Subscriptions</h1>
  </div>
  <h1 className= {styles.home2}> You</h1>
    </div>
  )  
}

export default MaxiSideBar
