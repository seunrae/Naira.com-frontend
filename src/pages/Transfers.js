import Navbar from "../layouts/Navbar";
import arrow from "../assets/arrow.png";
import filterIcon from "../assets/filter.png"
import searchIcon from "../assets/search.png"
import HorizontalLine from "../layouts/HorizontalLine";

const headers = [
    {name:"Date"},
    {name:"Amount"},
    {name:"Payer"},
    {name:"Payee"},
    {name:"Source Bank"},
    {name:"Destination Bank"},
    {name:"Narration"},
]

const bodyData = [
    {
        date: "2077-06-26",
        amount:"2000.00",
        payer: "Ajibade segun",
        payee: "Airtime sales -Mtn",
        sourceBank: "Wallet scheme",
        destinationBank: "Wallet scheme",
        narration:"view"
    },
    {
        date: "2077-06-26",
        amount:"2000.00",
        payer: "Ajibade segun",
        payee: "Airtime sales -Mtn",
        sourceBank: "Wallet scheme",
        destinationBank: "Wallet scheme",
        narration:"view"
    },
    {
        date: "2077-06-26",
        amount:"2000.00",
        payer: "Ajibade segun",
        payee: "Airtime sales -Mtn",
        sourceBank: "Wallet scheme",
        destinationBank: "Wallet scheme",
        narration:"view"
    },
    {
        date: "2077-06-26",
        amount:"2000.00",
        payer: "Ajibade segun",
        payee: "Airtime sales -Mtn",
        sourceBank: "Wallet scheme",
        destinationBank: "Wallet scheme",
        narration:"view"
    },
    {
        date: "2077-06-26",
        amount:"2000.00",
        payer: "Ajibade segun",
        payee: "Airtime sales -Mtn",
        sourceBank: "Wallet scheme",
        destinationBank: "Wallet scheme",
        narration:"view"
    },
]
const dropdownArrow = arrow

export default function Transfers(){

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
                        <div className="flex justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold">Transfers</h2>
                                <p className="text-grey">View all account transfers here</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <img src={searchIcon} className="w-[20px] h-[20px] relative left-8"></img>
                                <input type="text" className="w-[263px] h-[32px] px-10 mr-5 rounded-md border border-custom_grey focus:outline-none focus:border-purple-300 cursor-text" placeholder="Search for anything" />
                                <button className="w-[72px] h-[32px] flex items-center justify-center border border-custom_grey hover:border-purple-300 rounded-md">
                                    <div className="flex items-center">
                                        <img src={filterIcon} className="w-[16px] h-[16px] "></img>
                                        <p className="px-2">filter</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <HorizontalLine />
                        {/* begin table */}
                        <div className="my-8 w-full overflow-hidden">
                            <table className="w-full border-collapse">
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
                                                
                                                <td className="pr-19 py-2 text-left">{data.payer}</td>
                                                <td className="pr-19 py-2 text-left">{data.date}</td>
                                                <td className="pr-19 py-2 text-left">{data.amount}</td>
                                                <td className="pr-19 py-2 text-left">{data.payee}</td>
                                                <td className="pr-19 py-2 text-left">{data.sourceBank}</td>
                                                <td className="pr-19 py-2 text-left">{data.destinationBank}</td>
                                                <td className="pr-19 py-2">
                                                    <button className="w-auto h-auto bg-[#87CEEB] rounded-2xl px-4 py-1 text-[#0000FF] hover:bg-sky-300 hover:delay-150 hover:transition-all">{data.narration}</button>
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