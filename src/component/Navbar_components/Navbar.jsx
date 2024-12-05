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
        <RxHamburgerMenu onClick={handleChange}/>
        <Youtubeimage/>
      </div>

    <div>
      <Searchbar/>
    </div>

    </div> 
 )
}

export default Navbar
