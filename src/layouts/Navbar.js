import { useState } from "react";
import arrow from "../assets/arrow.png";
import Dropdownarrow from "./Dropdownarrow";
import Sidenav from "./Sidenav";
import { Link } from "react-router-dom";
import nairaLogo from "../assets/N.png"
export default function Navbar() {
    const dropdownArrow = arrow
    const [showNav, setShowNav] = useState(false)
    const [sideBarWidth, setSideBarWidth] = useState('0');
    const [sideNavWidth, setSideNavWidth] = useState('0');
    const [showDropDown, setShowDropdown] = useState(false);

    const openDropDown = ()=>{
        setShowDropdown(!showDropDown);
    }

    const openNav = () => {
        if(sideBarWidth === '0' && sideNavWidth === '0'){
            setSideBarWidth('100%');
            setSideNavWidth('20%');
        }
        else{
            setSideBarWidth('0');
            setSideNavWidth('0');  
        }

        console.log("button clicked");
        console.log(sideBarWidth);
        console.log(sideNavWidth);
        
    }

    const exitNav = () => {
        if (showDropDown){
            setShowDropdown(false)
        }
        if(sideBarWidth === '100%' && sideNavWidth === '20%'){
            setSideBarWidth('0');
            setSideNavWidth('0');
        }
    }
    return (
        <>
            <div className="w-full h-full">
            <div className="w-screen h-[59px] bg-white shadow-md flex px-20 justify-between overflow-hidden sticky top-0 ">
                <div className="flex items-center justify-center cursor-pointer hover:scale-90 hover:delay-150 hover:transition-all" onClick={()=> openNav()}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#000000"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/></svg>
                </div>
                <div className="flex items-center justify-center">
                <div className="flex flex-row">
                    <div className="w-10 h-10 mr-3 border rounded-full bg-light_purple flex items-center justify-center">
                        <h2 className="font-semibold text-secondary">A</h2>
                    </div>
                    <div className="mt-2 flex items-center justify-center cursor-pointer hover:scale-150 hover:delay-150 transition-all" onClick={()=>openDropDown()}>
                        <img src={dropdownArrow} className="w-[25px] h-[25px]"></img>
                    </div>
                    
                </div>
                </div>
            </div>
            { showDropDown && (
            <div className="fixed w-full h-full" onClick={()=> openDropDown()}> 
                <div className="p-5 fixed bg-white rounded-2xl shadow-md right-10 mt-4" >
                    <ul className="list-none p-0">
                        <li className="list-none hover:text-secondary delay-150 cursor-pointer duration-150">User info</li>
                        <li className="list-none hover:text-secondary delay-150 cursor-pointer duration-150">Log-off</li>
                    </ul>
                </div>
            </div>
            ) }
            
            {/* {showNav ? <Sidenav sideBarWidth={sideBarWidth} sideNavWidth={sideNavWidth} /> : <></>} */}
            {/* <Sidenav sideBarWidth={sideBarWidth} sideNavWidth={sideNavWidth} /> */}

            {/* sidenav */}
            <div onClick={()=>{exitNav()}} id="sideBar" style={{width: sideBarWidth}} className="fixed top-0 left-0 bg-black bg-opacity-10 w-0 h-full  overflow-x-hidden z-10">
            <div id="sideNav"  style={{width: sideNavWidth}} className="w-[262px] h-screen fixed top-0 left-0 z-50 overflow-x-hidden transition-all duration-500 bg-white delay-150 shadow-xl overflow-hidden">
                <div className="flex items-center px-[30px]">
                    <img src={nairaLogo} className="w-[60px] h-[70px]"></img>
                    <h1 className="pt-[10px]">Naira.com</h1>
                </div>
                <ul className="p-0 list-none no-underline px-[15px] py-[10px]">
                    <li className="list-none px-[15px] py-[10px] text-grey hover:text-secondary delay-150 duration-150">
                        <Link to='/accounts' className="px-[15px] py-[10px]">Accounts</Link>
                    </li>
                    <li className="list-none px-[15px] py-[10px] text-grey hover:text-secondary delay-150 duration-150">
                        <Link to='/airtime' className="px-[15px] py-[10px]">Airtime</Link>
                    </li>
                    <li className="list-none px-[15px] py-[10px] text-grey hover:text-secondary delay-150 duration-150">
                        <Link to='/transfer-funds' className="px-[15px] py-[10px]">Transfers</Link>
                    </li>
                    <li className="list-none px-[15px] py-[10px] text-grey hover:text-secondary delay-150 duration-150">
                        <Link to='/upload' className="px-[15px] py-[10px]">Upload</Link>
                    </li>
                    <li className="list-none px-[15px] py-[10px] text-grey hover:text-secondary delay-150 duration-150">
                        <a href="" className="px-[15px] py-[10px]">Approvals</a>
                    </li>
                </ul>
            </div>
            </div>
            </div>
            
        </>
    );
}