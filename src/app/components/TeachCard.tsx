import Image from "../../../node_modules/next/image";
type TeachCard ={
    imageURL:string
    TeachStack : string
    
}
export default function TeachCard({imageURL, TeachStack}: TeachCard){
    return(
        <>
        < div className="w-48 h-48 flex justify-center items-center shadow lg drop-shadow overflow-hidden rounded-3xl bg-opacitiy-20 flex cl mx-1  hover:bg -[#265b64] hover:bg-opacity-20 hover:scale-125">
            <div className ="relative object-cover w-20 h-20">
            <Image
             src={imageURL} alt ="a" fill={true}/>
            </div>
        </div>
        </>
    )
}