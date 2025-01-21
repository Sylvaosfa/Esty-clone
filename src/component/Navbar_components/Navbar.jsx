import React,{ useContext } from 'react';
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";
import Youtubeimage from './Youtubeimage';
import Searchbar from './Searchbar';
import { SideContext } from '@/contexts/SideContext';
const Navbar = () => {

  const { toggle, setToggle }  = useContext(SideContext)

  const handleChange = () =>{
    setToggle((prev) => !prev)
  }

  return (
    <div className='flex gap-14 nav'>
      
    <div className='flex items-center gap-6 ml-7'>
      <div className='ham'>
        <RxHamburgerMenu onClick={handleChange}/>
        </div>
        <Youtubeimage/>
        <div className='nig'>
        <h1>NG</h1>
        </div>
      </div>  

   <div className='image_page'>

    <div>
      <Searchbar/>
    </div>
    <div className='image_page1'>
    <Image src='/icons8-microphone-24.png' width={13} height={7} alt='image' /> 
    </div>
    <div className='video'>
    <Image src='/icons8-youtube-50.png' width={13} height={7} alt='image' /> 
    </div>
    <div className='note'>
    <Image src='/icons8-notification-24.png' width={13} height={7} alt='image' />
    </div>
  
    </div>
    </div> 
 )
}

export default Navbar
