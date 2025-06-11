import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo_viris_code.png"

function Header() {
    function handleMenu() {
        const nav = document.querySelector("nav")
        nav.classList.toggle("opacity-0")

        if (!nav.classList.contains("opacity-0")) {
            nav.classList.remove("hidden")
            return
        }

        nav.classList.add("hidden")
    }

    return (
        <header className="w-full flex justify-between items-center px-4 py-1 border-b border-b-gray-300 relative md:static md:gap-2 transition">

            <figure className="p-0">
                <Link to="/"><img className="w-10" src={logo} alt="logo vires code" /></Link>
            </figure>

            <FaBars className="text-2xl md:hidden shadow-xl w-10 rounded-sm" onClick={handleMenu} />

            <nav className="hidden opacity-0 absolute top-11 left-0 w-full bg-gray-300 transition-opacity md:block md:opacity-100 md:static md:bg-transparent">
                <ul className="flex flex-col justify-center items-center gap-2 py-1 md:flex-row md:justify-end">
                    <li className="p-0 border border-gray-300 rounded-sm hover:text-white cursor-pointer hover:bg-[#4285F4] transition-all text-sm"><Link to="/" className="m-0 p-1 w-full">Home</Link></li>

                    <li className="p-0 text-center border border-gray-300 rounded-sm hover:text-white cursor-pointer hover:bg-[#4285F4] transition-all text-sm"><Link to="/servicos" className="m-0 p-1">Serviços</Link></li>

                    <li className="p-0 border border-gray-300 rounded-sm hover:text-white cursor-pointer hover:bg-[#4285F4] transition-all text-sm"><Link to="/projectos" className="m-0 p-1">Projectos</Link></li>

                    <li className="p-0 border border-gray-300 rounded-sm hover:text-white cursor-pointer hover:bg-[#4285F4] transition-all text-sm"><Link to="/sobre" className="m-0 p-1">Sobre</Link></li>

                    <li className="p-0 border border-gray-300 rounded-sm hover:text-white cursor-pointer hover:bg-[#4285F4] transition-all text-sm"><Link to="/contacto" className="m-0 p-1">Fale conosco</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header