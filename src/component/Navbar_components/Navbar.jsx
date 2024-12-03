import React from 'react';
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";
import Youtubeimage from './Youtubeimage';
import Searchbar from './Searchbar';

const Navbar = () => {
  return (
    <div className='flex gap-14 nav'>
    <div className='flex items-center gap-6 ml-7'>
        <RxHamburgerMenu/>
        <Youtubeimage/>
      </div>

    <div>
      <Searchbar/>
    </div>

    </div> 
 )
}

export default Navbar
