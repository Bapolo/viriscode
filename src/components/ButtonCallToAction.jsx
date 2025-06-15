import { FaPhone } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function ButtonCallToAction({ descricao, icone: Icone , pagina }) {
    const navegar = useNavigate()
    return (
        <button onClick={() => navegar(`/${pagina}`)} className="flex items-center justify-center py-2 px-3 bg-[#4285F4] hover:bg-[#668cca] rounded-md text-white cursor-pointer transition-all shadow-xl">{ descricao } <Icone className="ml-2 text-white" /></button>
    )
}

export default ButtonCallToAction