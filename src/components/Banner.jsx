import background from "../assets/banner-background.png"
import { FaCubes } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import ButtonCallToAction from "./ButtonCallToAction"
import { FaPhone } from "react-icons/fa"

function Banner() {

    const navegar = useNavigate()

    return (
        <section className="py-4 px-4 mb-5 flex flex-col text-center items-center text-gray-700 rounded-md" style={{boxShadow: "0 4px 4px -2px rgba(0, 0, 0, 0.2)"}}>
                <p className="my-6 font-light text-md uppercase">Soluções digitais que movem negócios</p>

                <h2 className="text-4xl capitalize font-medium mb-6 text-gray-900">A presença da sua Empresa na Web potencializa a versatilidade do seu negócio</h2>

                <p className="text-md mb-8">Criamos websites e sistemas modernos, rápidos e estratégicos para empresas e criadores que querem se destacar.</p>


                <ButtonCallToAction descricao="Fale conosco" icone={FaPhone} pagina="contacto" />
        </section>
    )
}

export default Banner