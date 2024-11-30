"use client"

import React, { useState } from "react";
import Navbar from "@/component/Navbar_components/Navbar";
import Feeds from "@/component/MainContent/Feeds";
import SideBar from "@/component/SideContents/SideBar";
export default function Home() {
    const [ count, setCount ] = useState ("data")
    return(
        <div className="container page_container">
            <Navbar/>

            <div className="con">
                <SideBar/>
                <Feeds cou={count}/>
            </div>
        </div>
    )
}