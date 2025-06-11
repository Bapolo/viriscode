import { FaPhone } from "react-icons/fa"
import { FaCubes } from "react-icons/fa"
import background from "../assets/banner-background.png"
import { useNavigate } from "react-router-dom"

function Banner() {

    const navegar = useNavigate()

    return (
        <section className="bg-gray-100 py-4  px-0 pb-20 flex ">
            <div className="pl-4 flex-1">
                <p className="my-6 font-light text-md text-gray-800 uppercase">Soluções digitais que movem negócios</p>

                <h2 className="text-3xl font-light capitalize mb-6">A presença da sua <span className="text-[#34A853]">Empresa</span> na Web potencializa a versatilidade do seu negócio</h2>

                <p className="text-sm text-gray-800 mb-8">Na Viris Code, criamos websites e sistemas modernos, rápidos e estratégicos para empresas e criadores que querem se destacar.</p>

                <div className="flex items-center gap-4">
                    <button onClick={() => navegar("/contacto")} className="flex items-center py-2 px-3 bg-[#34A853] hover:bg-[#428353] rounded-md text-white cursor-pointer transition-all">Fale conosco <FaPhone className="ml-2 text-white" /></button>

                    <button onClick={() => navegar("/projectos")} className="flex items-center py-2 px-3 bg-[#34A853] hover:bg-[#428353] rounded-md text-white cursor-pointer transition-all">Ver projectos <FaCubes className="ml-2 text-white" /></button>
                </div>
            </div>

            <figure className="pt-10">
                <img className="w-60 object-contain" src={background} alt="imagen de um homem segurando uma maçã" />
            </figure>
        </section>
    )
}

export default Banner