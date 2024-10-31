import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import HorizontalLine from "../layouts/HorizontalLine";

// const [dataURL, setDataURL] =  useState(null)
// const [uploadedURL, setUploadedURL] = useState(null)

// const onDrop = useCallback(acceptedFiles =>{
//     acceptedFiles.forEach(element => {
//         const reader = new FileReader()
//         reader.onabort = () => console.log("");
//         reader.onerror = () => console.log("");
//         reader.onload = () => {
//             const binaryStr = reader.result
//             setDataURL(binaryStr)
//         }
                
//     });
// }, [])
//initialize variables
// const {getRootProps, acceptedFiles, getInputProps, isDragActive, } = useDropzone({onDrop})

export default function Upload(){
    const [files, setFiles] = useState([])

    const handleFileChange = (e)=>{
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);
    }

    const handleUpload = () => {
        console.log("Files to upload:", files);
        alert("files uploaded successfully");
        setFiles([]);
        window.location.reload();   
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
                    {/* <hr className="my-8 border border-gray-300"/> */}
                    <HorizontalLine />
                    <div className="w-auto h-auto p-10 bg-white rounded-2xl shadow-md">
                        <div className="">
                            <div className="flex">
                                <h2 className="text-2xl font-semibold mr-10 text-secondary">Upload</h2>
                                <Link to="/uploaded-files" className="text-2xl font-semibold mx-10 hover:text-purple-300 hover:border-b-4 hover:border-purple-300 hover:transition-all hover:delay-150 hover:duration-100">Upload Files</Link>
                            </div>
                            {/* <hr className="my-8 border border-grey"/> */}
                            <HorizontalLine />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center">
                            <div className="w-[705px] h-[323px] border-2 border-primary cursor-pointer flex items-center justify-center">
                                <input type="file" multiple className="hidden" id="file-upload" onChange={handleFileChange}/>
                                <label htmlFor="file-upload" className="cursor-pointer hover:text-purple-300">
                                    Click here to upload file [You can upload more than one image]
                                </label>
                            </div>
                            </div>
                            <div className="text-center">
                            <button className="w-[270px] h-[58px] mt-8 bg-secondary hover:bg-purple-300 text-white rounded-md px-4 delay-150 duration-150" onClick={handleUpload}>upload</button>
                            </div>
                            <div className="mt-4 flex items-center justify-center text-center">
                                {
                                    files.length > 0 && (
                                        <div>
                                            <h3 className="text-lg font-semibold">Selected Files:</h3>
                                            <ul className="list-none no-underline">
                                                {
                                                    files.map((file, index) => (
                                                        <li key={index} className="list-none text-purple-400 block">{file.name}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}