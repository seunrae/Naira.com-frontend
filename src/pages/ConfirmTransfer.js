import { Link } from "react-router-dom";
import arrow from "../assets/arrow.png";
import HorizontalLine from "../layouts/HorizontalLine";
import Navbar from "../layouts/Navbar";



const transferDetails = {
    sourceAccount: "Ajibade segun",
    beneficiaryAccountNumber: "1223217756", 
    beneficiaryBank: "Access Bank", 
    beneficiaryPhoneNumber: "09039588135", 
    amount: "1000"
}

export default function ConfirmTransfer (){
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
                                <h2 className="text-2xl font-semibold">Transfer funds</h2>
                            </div>
                            {/* <hr className="my-8 border border-grey"/> */}
                            <HorizontalLine />
                        </div>
                        <div className="flex flex-row">
                            <div>
                                <form>
                                    <div className="grid grid-cols-2">
                                        <input type="text" value={transferDetails.sourceAccount} placeholder="source account" className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8"/>
                                        <input type="text" value={transferDetails.beneficiaryAccountNumber} placeholder="Beneficiary Account Number" className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8"/>
                                        <input type="text" value={transferDetails.beneficiaryBank} placeholder="select beneficiary bank" className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8"/>
                                        <input type="text" value={transferDetails.beneficiaryPhoneNumber} placeholder="Beneficiary Phone number" className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8"/>
                                        <input type="text" value={transferDetails.amount} placeholder="Amount" className="w-[486px] h-[58px] text-grey border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8"/>
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