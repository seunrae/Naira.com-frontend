import Navbar from "../layouts/Navbar";
import smartPhoneImg from "../assets/smart-phone.png"
import { Link } from "react-router-dom";
import HorizontalLine from "../layouts/HorizontalLine";

export default function Airtime(){
    return (
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
                                <form className="flex flex-col">
                                    <select className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8">
                                        <option value="" disabled selected hidden>Source Account</option>
                                    </select>
                                    <select className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8">
                                        <option value="" disabled selected hidden>Select a Network</option>
                                    </select>
                                    <input type="text" placeholder="Phone number" className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8"/>
                                    <input type="text" placeholder="Amount" className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8"/>
                                    <Link to="/airtime/purchase-airtime"><button className="w-[270px] h-[58px] bg-secondary hover:bg-purple-300 text-white rounded-md px-4 delay-150 duration-150">Continue</button></Link>
                                </form>
                            </div>
                            <div className="ml-10">
                                <h1 className="font-bold relative top-32 left-52 text-2xl">*312*1#</h1>
                                <img src={smartPhoneImg} className="w-[433px] h-[433px]" ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}