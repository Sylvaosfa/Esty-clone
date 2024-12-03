import React from 'react'
import Image from 'next/image'
import styles from './Sidebar.module.css'
const SideBar = () => {
  return (
    <div className={styles.SideBar}>
      
      <div>
        <Image src='/IMG-20241202-WA0079.jpg' width={20} height={20} alt='image' />
        <h1>Home</h1>
        </div>
      <div>
        <Image src='/IMG-20241202-WA0081.jpg' width={20} height={20} alt='image' />
        <h1>Short</h1>
        </div>
      <div>
        <Image src='/IMG-20241202-WA0080.jpg' width={20} height={20} alt='image' />
        <h1>Subscription</h1>
        </div>
      <div>
        <Image src='/IMG-20241202-WA0082.jpg' width={20} height={20} alt='image' />
        <h1>You</h1>
        </div>
    </div>
  )
}

export default SideBar
