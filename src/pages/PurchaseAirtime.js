import Navbar from "../layouts/Navbar";
import cashImg from "../assets/cash.jpg"
import HorizontalLine from "../layouts/HorizontalLine";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.png";

export default function PurchaseAirtime(){
    const dropdownArrow = arrow
    const airtimeDetials = {
        sourceAccount: "Ajibade segun", 
        network: "MTN NG", 
        phoneNumber: "08130245746", 
        amount: "1000"
    }
    return(
        <>
            <div>
                <Navbar />
                <div className="mx-20 mb-8">
                    <div className="my-4">
                        <p className="text-grey">Welcome back, </p>
                        <h1 className="text-2xl font-semibold">Ajibade Olusegun</h1>
                    </div>
                    {/* <hr className="my-8 border border-grey"/> */}
                    <HorizontalLine />
                    <div className="w-auto h-auto p-10  bg-white rounded-2xl shadow-md">
                        <div className="">
                            <div>
                                <h2 className="text-2xl font-semibold">Airtime</h2>
                            </div>
                            {/* <hr className="my-8 border border-grey"/> */}
                            <HorizontalLine />
                        </div>
                        <div className="flex flex-row">
                            <div>
                                <div className="w-[104px] h-[36px] bg-custom_grey rounded-full flex items-center justify-center px-5 py-2 mb-8 hover:scale-90 hover:duration-150 hover:transition-all ease-in-out">
                                    <Link to="/airtime" className="flex">
                                        <div className="flex items-center justify-center">
                                            <img src={dropdownArrow} className="w-[25px] h-[25px] rotate-90"></img>
                                        </div>
                                        <span className="">back</span>
                                    </Link>
                                </div>
                                <form className="flex flex-col">
                                    <input type="text" value={airtimeDetials.sourceAccount} placeholder="Source Account" className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8"/>
                                    <input type="text" value={airtimeDetials.network} placeholder="Network" className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8"/>
                                    <input type="text" value={airtimeDetials.phoneNumber} placeholder="phone number" className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8"/>
                                    <input type="text" value={airtimeDetials.amount} placeholder="amount" className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8"/>
                                    <input type="text" placeholder="Enter token/otp" className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8"/>
                                    <button className="w-[270px] h-[58px] bg-secondary hover:bg-purple-300 text-white rounded-md px-4 delay-150 duration-150">Purchase Airtime</button>
                                </form>
                            </div>
                            <div className="ml-10">
                                <img src={cashImg} className="w-[392px] h-[352px]" ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}