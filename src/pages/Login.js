import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Login(){
    return (
    <>
    <div className="flex items-center justify-center h-[100vh]">
        <div className="w-auto h-auto px-8 py-3 bg-white rounded-md shadow-md">
            <h1 className="text-center font-bold text-4xl my-5">Login</h1>            
            <hr className="mb-5"/>
            <div className="flex flex-col">
                <input  type="email" placeholder="Enter your email" className="w-[486px] h-[58px]  border-2 border-primary rounded-md px-4 my-8 focus:outline-none focus:border-purple-300"/>
                <input  type="password" placeholder="Enter your password" className="w-[486px] h-[58px]  border-2 border-primary focus:outline-none focus:border-purple-300 rounded-md px-4 mb-8"/>
                <a href="" className="mb-8 text-center hover:text-purple-400">forgot password?</a>
                <div>
                    <button type="submit" className="w-[486px] h-[58px] text-white bg-secondary rounded-md mb-8 hover:bg-purple-300 delay-150 duration-150">Login</button>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}