import arrow from "../assets/arrow.png"

export default function MyTable({headers}){
    const dropdownArrow = arrow
    return(
        <>
        <div>
        <div className="my-8 w-full overflow-hidden">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-t border-t-custom_grey border-b border-b-custom_grey px-5">

                                        {/* <td className="text-grey py-2">#</td> */}
                                        {
                                        headers.map( header => (
                                            <td className="text-grey pr-20 py-2 text-left whitespace-nowrap">{header.name}</td>
                                        ))
                                        }
                                        

                                        {/* <td className="text-grey px-20 py-2">Account Name</td>
                                        <td className="text-grey px-20 py-2">Balance</td>
                                        <td className="text-grey px-20 py-2">Action</td> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-b-custom_grey">
                                        <td className="py-2">1</td>
                                        <td className="pr-20 py-2">1223217756</td>
                                        <td className="pr-20 py-2 text-left whitespace-nowrap">Ademilua Oluseun Gabriel</td>
                                        <td className="pr-20 py-2">5000.00</td>
                                        <td className="pr-20 py-2">
                                            <button className="w-auto h-auto bg-[#87CEEB] rounded-2xl px-4 py-1 text-[#0000FF] hover:border hover:border-[#0000FF]">view</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
            </div>
            <div className="flex justify-between">
                            <p className="mt-2 font-semibold">Showing 01 of 10 data</p>
                            <div className="flex flex-row">
                            <div className="mr-3 flex items-center justify-center">
                                    <div className="w-[45px] h-[45px] mr-3 hover:border hover:rounded-full hover:bg-secondary hover:text-white flex items-center justify-center cursor-pointer">
                                        <img src={dropdownArrow} className="w-[25px] h-[25px] rotate-90"></img>
                                    </div>   
                                </div>
                                <div className="w-[45px] h-[45px] mr-3 hover:border hover:rounded-full hover:bg-secondary hover:text-white flex items-center justify-center cursor-pointer">
                                    <p className="">1</p>
                                </div>
                                <div className="w-[45px] h-[45px] mr-3 hover:border hover:rounded-full hover:bg-secondary hover:text-white flex items-center justify-center cursor-pointer">
                                    <p className="">2</p>
                                </div>
                                <div className="w-[45px] h-[45px] mr-3 hover:border hover:rounded-full hover:bg-secondary hover:text-white flex items-center justify-center cursor-pointer">
                                    <p className="">3</p>
                                </div>
                                <div className="w-[45px] h-[45px] mr-3 hover:border hover:rounded-full hover:bg-secondary hover:text-white flex items-center justify-center cursor-pointer">
                                    <p className="">4</p>
                                </div>
                                <div className="w-[45px] h-[45px] mr-3 hover:border hover:rounded-full hover:bg-secondary hover:text-white flex items-center justify-center cursor-pointer">
                                    <p className="">5</p>
                                </div>
                                <div className="mr-3 flex items-center justify-center">
                                    <div className="w-[45px] h-[45px] mr-3 hover:border hover:rounded-full hover:bg-secondary hover:text-white flex items-center justify-center cursor-pointer">
                                        <img src={dropdownArrow} className="w-[25px] h-[25px] -rotate-90"></img>
                                    </div>   
                                </div>
                            </div>
                        </div>
        </div>
        
        </>
    )
}