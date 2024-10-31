import { Link } from "react-router-dom";
import nairaLogo from "../assets/N.png"
import { useEffect, useRef, useState } from "react";
export default function Sidenav({sideBarWidth, sideNavWidth}){
    useEffect(()=>{
        console.log("---sidenav----");
        
        console.log(sideBarWidth);
        console.log(sideNavWidth);
        
        
    },[])
    const sideBarRef = useRef(null);
  const sideNavRef = useRef(null);

    const exitNav = () => {
        if (sideBarRef.current && sideNavRef.current) {
            sideBarRef.current.style.width = '0';
            sideNavRef.current.style.width = '0';
          }
        console.log(sideBarRef.current.style.width);
        console.log(sideNavRef.current.style.width);
      };


    return(
        <>
            <div onClick={()=>{exitNav()}} id="sideBar" ref={sideBarRef} style={{width: sideBarWidth}} className="fixed top-0 left-0 bg-black bg-opacity-10 w-0 h-full  overflow-x-hidden z-10">
            <div id="sideNav" ref={sideNavRef} style={{width: sideNavWidth}} className="w-[262px] h-screen fixed top-0 left-0 z-50 overflow-x-hidden transition-all duration-500 bg-white delay-150 shadow-xl overflow-hidden">
                <div className="flex items-center px-[30px]">
                    <img src={nairaLogo} className="w-[60px] h-[70px]"></img>
                    <h1 className="pt-[10px]">Naira.com</h1>
                </div>
                <ul className="p-0 list-none no-underline px-[15px] py-[10px]">
                    <li className="list-none px-[15px] py-[10px] text-grey hover:text-secondary">
                        <Link to='/accounts' className="px-[15px] py-[10px]">Accounts</Link>
                    </li>
                    <li className="list-none px-[15px] py-[10px] text-grey hover:text-secondary">
                        <Link to='/airtime' className="px-[15px] py-[10px]">Airtime</Link>
                    </li>
                    <li className="list-none px-[15px] py-[10px] text-grey hover:text-secondary">
                        <Link to='/transfer-funds' className="px-[15px] py-[10px]">Transfers</Link>
                    </li>
                    <li className="list-none px-[15px] py-[10px] text-grey hover:text-secondary">
                        <Link to='/upload' className="px-[15px] py-[10px]">Upload</Link>
                    </li>
                    <li className="list-none px-[15px] py-[10px] text-grey hover:text-secondary">
                        <a href="" className="px-[15px] py-[10px]">Approvals</a>
                    </li>
                </ul>
            </div>
            </div>
        </>
    );
}