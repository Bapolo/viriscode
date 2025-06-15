import { Link, useNavigate } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo_viris_code.png"
import LinkNav from "./LinkNav";

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

    const navegar = useNavigate()

    return (
        <header className="w-full flex justify-between items-center px-4 py-3  relative md:static md:gap-2 transition text-xl bg-white">

            <figure className="p-0" onClick={() => navegar("/")}>
                <img className="w-20" src={logo} alt="logo vires code" />
            </figure>

            <FaBars className="text-4xl md:hidden w-20 rounded-sm" onClick={handleMenu} />

            <nav className="hidden opacity-0 absolute top-full left-0 w-full bg-gray-300 transition-opacity md:block md:opacity-100 md:static md:bg-transparent">
                <ul className="flex flex-col justify-center items-center gap-2 py-1 md:flex-row md:justify-end">

                    <LinkNav paginaDestino="/" descricao="Home" />
                    <LinkNav paginaDestino="/servicos" descricao="Serviços" />
                    <LinkNav paginaDestino="/projectos" descricao="Projectos" />
                    <LinkNav paginaDestino="/sobre" descricao="Sobre" />
                    <LinkNav paginaDestino="/contacto" descricao="Fale-conosco" />

                </ul>
            </nav>
        </header>
    )
}

export default Header