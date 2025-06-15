import { Link } from "react-router-dom"

function LinkNav({ paginaDestino, descricao }) {
    return (
        <li className="hover:text-white cursor-pointer hover:bg-[#4285F4] transition-all rounded-md"><Link to={ paginaDestino } className="p-2 w-full">{ descricao }</Link></li>
    )
}

export default LinkNav