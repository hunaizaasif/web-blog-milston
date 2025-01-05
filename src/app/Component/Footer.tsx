import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link"
export default function Footer(){
    return(
        <div>
            <footer className="bg-slate-300 h-30 text-center ">
        
            <div>
                 <h1 className="text-xl font-bold py-8">Made by Amber Asif</h1>
            <div className="flex justify-center space-x-4 ">
        
            <Link href="https://www.linkedin.com/in/amber-asif/" ><FaLinkedin className="  text-blue-400  h-8 w-8 rounded-lg "/> </Link>
            
            <Link href="https://github.com/hunaizaasif"><FaGithubSquare className="  h-8 w-8 rounded-lg" /> </Link>
        
            </div>
             <a href="mailto:muhammadasif.qict@gmail.com" target="_blank" className="text-blue-800 items-center underline flex gap-3 justify-center">
             <MdEmail className="size-5" />
                 muhammadasif.qict@gmail.com</a>
            </div>
            </footer>
            
            </div>

        
    )
}