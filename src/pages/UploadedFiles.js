import arrow from "../assets/arrow.png";
import Navbar from "../layouts/Navbar";
import filterIcon from "../assets/filter.png"
import searchIcon from "../assets/search.png"
import { Link } from "react-router-dom";
import HorizontalLine from "../layouts/HorizontalLine";
import Sidenav from "../layouts/Sidenav";
const headers = [
    {name:"Date"},
    {name:"Uploaded by"},
    {name:"Approved/Rejected by"},
    {name:"Amount"},
    {name:"Approval status"},
    {name:"Action"},
]

const bodyData = [
    {
        date: "2077-06-26",
        uploadedBy:"Ajibade Segun",
        approvedRejectedBy: "Femi Ogunfowora",
        amount: "2000",
        approvalStatus: "Pending",
        action: "view",
    },
    {
        date: "2077-06-26",
        uploadedBy:"Ajibade Segun",
        approvedRejectedBy: "Femi Ogunfowora",
        amount: "2000",
        approvalStatus: "Pending",
        action: "view",
    },
    {
        date: "2077-06-26",
        uploadedBy:"Ajibade Segun",
        approvedRejectedBy: "Femi Ogunfowora",
        amount: "2000",
        approvalStatus: "Rejected",
        action: "view",
    },
    {
        date: "2077-06-26",
        uploadedBy:"Ajibade Segun",
        approvedRejectedBy: "Femi Ogunfowora",
        amount: "2000",
        approvalStatus: "Approved",
        action: "view",
    },
]
const dropdownArrow = arrow

export default function UploadedFiles(){
    return(
        <>
            <div>
                <Navbar />
                <div className="mx-20 mb-8">
                    <div className="my-4">
                        <p className="text-grey">Welcome back, </p>
                        <h1 className="text-2xl font-semibold">Ajibade Olusegun</h1>
                    </div>
                    <hr className="my-8 border border-grey"/>
                    <div className="w-auto h-auto p-10  bg-white rounded-2xl shadow-md">
                        <div className="">
                            <div className="flex">
                                <Link to="/upload" className="text-2xl font-semibold mr-10 hover:text-purple-300 hover:border-b-4 hover:border-purple-300 hover:transition-all hover:delay-150 hover:duration-100">Upload</Link>
                                <h2 className="text-2xl font-semibold mx-10  text-secondary">Uploaded Files</h2>
                            </div>
                            {/* <hr className="my-8 border border-grey"/> */}
                            <HorizontalLine />
                        </div>
                        {/* begin table */}
                        <div className="my-8 w-full overflow-hidden">
                            <table className="w-full border-collapse transition-all">
                                <thead>
                                    <tr className="border-t border-t-custom_grey border-b border-b-custom_grey px-5">
                                        {
                                        headers.map( header => (
                                            <td className="text-grey pr-19 py-2 text-left whitespace-nowrap">{header.name}</td>
                                        ))
                                        }
                                        {/* <td className="text-grey py-2">#</td> */}
                                        {/* <td className="text-grey px-20 py-2">Account Name</td>
                                        <td className="text-grey px-20 py-2">Balance</td>
                                        <td className="text-grey px-20 py-2">Action</td> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bodyData.map((data)=>(
                                            <tr className="border-b border-b-custom_grey">
                                                
                                                <td className="pr-19 py-2 text-left">{data.date}</td>
                                                <td className="pr-19 py-2 text-left">{data.uploadedBy}</td>
                                                <td className="pr-19 py-2 text-left">{data.approvedRejectedBy}</td>
                                                <td className="pr-19 py-2 text-left">{data.amount}</td>
                                                <td className="pr-19 py-2">
                                                    {
                                                        data.approvalStatus == "Pending" ? 
                                                        <button className="w-auto h-auto bg-[#FFFDD0] rounded-2xl px-4 py-1 text-[#FFBF00]">{data.approvalStatus}</button> 
                                                        : (data.approvalStatus == "Rejected" ? 
                                                        <button className="w-auto h-auto bg-[#FFD0D1] rounded-2xl px-4 py-1 text-[#FF0004]">{data.approvalStatus}</button>
                                                         : <button className="w-auto h-auto bg-[#D1FFD0] rounded-2xl px-4 py-1 text-[#37FF00]">{data.approvalStatus}</button> )
                                                    }
                                                </td>
                                                <td className="pr-19 py-2">
                                                    <button className="w-auto h-auto bg-[#87CEEB] rounded-2xl px-4 py-1 text-[#0000FF] hover:bg-sky-300 hover:delay-150 hover:transition-all">{data.action}</button>
                                                </td>
                                                {/* <td className="py-2">1</td>
                                                <td className="pr-20 py-2">1223217756</td> */}
                                                {/* <td className="pr-20 py-2">5000.00</td> */}
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
            </div>
                        {/* end table */}
                        <div className="flex justify-between">
                            <p className="mt-2 font-semibold">Showing 01 of 10 data</p>
                            <div className="flex flex-row">
                            <div className="mr-3 flex items-center justify-center">
                                    <div className="w-[45px] h-[45px] mr-3 hover:border hover:rounded-full hover:bg-secondary hover:text-white flex items-center justify-center cursor-pointer delay-150 duration-150">
                                        <img src={dropdownArrow} className="w-[25px] h-[25px] rotate-90"></img>
                                    </div>   
                                </div>
                                <div className="w-[45px] h-[45px] mr-3 hover:border hover:rounded-full hover:bg-secondary hover:text-white flex items-center justify-center cursor-pointer delay-150 duration-150">
                                    <p className="">1</p>
                                </div>
                                <div className="w-[45px] h-[45px] mr-3 hover:border hover:rounded-full hover:bg-secondary hover:text-white flex items-center justify-center cursor-pointer delay-150 duration-150">
                                    <p className="">2</p>
                                </div>
                                <div className="w-[45px] h-[45px] mr-3 hover:border hover:rounded-full hover:bg-secondary hover:text-white flex items-center justify-center cursor-pointer delay-150 duration-150">
                                    <p className="">3</p>
                                </div>
                                <div className="w-[45px] h-[45px] mr-3 hover:border hover:rounded-full hover:bg-secondary hover:text-white flex items-center justify-center cursor-pointer delay-150 duration-150">
                                    <p className="">4</p>
                                </div>
                                <div className="w-[45px] h-[45px] mr-3 hover:border hover:rounded-full hover:bg-secondary hover:text-white flex items-center justify-center cursor-pointer delay-150 duration-150">
                                    <p className="">5</p>
                                </div>
                                <div className="mr-3 flex items-center justify-center">
                                    <div className="w-[45px] h-[45px] mr-3 hover:border hover:rounded-full hover:bg-secondary hover:text-white flex items-center justify-center cursor-pointer delay-150 duration-150">
                                        <img src={dropdownArrow} className="w-[25px] h-[25px] -rotate-90"></img>
                                    </div>   
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}