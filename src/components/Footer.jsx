import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-[#4285F4] text-white flex gap-3 justify-between items-center p-4 text-sm">
            <div className="flex gap-2">
                <Link to="http://github.com/bapolo" target="_blank" className="p-0"><FaGithub className="text-2xl" /></Link>
                <Link to="http://facebook.com" target="_blank" className="p-0"><FaFacebook className="text-2xl" /></Link>
                <Link to="http://instagram.com" target="_blank" className="p-0"><FaInstagramSquare className="text-2xl"/></Link>
            </div>
            <p className="font-thin">
                feito por Viris-Code | &copy; copyright - todos os direitos reservados
            </p>
        </footer>
    )
}

export default Footer