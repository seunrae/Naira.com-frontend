import arrow from "../assets/arrow.png";

export default function Dropdownarrow(){
    const dropdownArrow = arrow
    return (
        <>
            <div className=" mt-2 flex items-center justify-center">
                <img src={dropdownArrow} className="w-[25px] h-[25px]"></img>
            </div>
        </>
    )
}