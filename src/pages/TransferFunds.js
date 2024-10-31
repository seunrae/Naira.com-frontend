import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import HorizontalLine from "../layouts/HorizontalLine";

export default function TransferFunds(){
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
                    <div className="w-auto h-auto p-10 bg-white rounded-2xl shadow-md">
                        <div className="">
                            <div>
                                <h2 className="text-2xl font-semibold">Transfer funds</h2>
                            </div>
                            {/* <hr className="my-8 border border-grey"/> */}
                            <HorizontalLine />
                        </div>
                        <div className="flex flex-row">
                            <div>
                                <form>
                                    <div className="grid grid-cols-2">
                                        <select className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8">
                                            <option value="" disabled selected hidden>Select Source Account</option>
                                        </select>
                                        <input type="text" placeholder="Beneficiary Account Number" className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8"/>
                                        <select className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8">
                                            <option value="" disabled selected hidden>Select Beneficiary Bank</option>
                                        </select>
                                        <input type="text" placeholder="Beneficiary Phone number" className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8"/>
                                        <input type="text" placeholder="Amount" className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8"/>
                                        <p className="font-semibold italic">(Note: Enter Beneficiary phone number to send SMS to beneficiary or leave bank, N5.00 charge applies)</p>
                                    </div>
                                   
                                    <Link to="/airtime/purchase-airtime"><button className="w-[270px] h-[58px] bg-secondary hover:bg-purple-300 text-white rounded-md px-4 delay-150 duration-150">Transfer</button></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}