import background from "../assets/background.svg"
import ButtonCallToAction from "./ButtonCallToAction"
import { FaPhone } from "react-icons/fa"

function Banner() {

    const img = "/background.svg"

    return (
        <section className="py-4 px-4 mb-10 flex flex-col text-center items-center  rounded-md text-white" style={{
            boxShadow: "0 4px 4px -2px rgba(0, 0, 0, 0.2)", backgroundImage: `url(viriscode/${img})`
        }} >

            <p className="my-6 font-light text-md uppercase">Soluções digitais que movem negócios</p>

            <h2 className="text-4xl capitalize font-medium mb-6  md:max-w-[65%]">A presença da sua Empresa na Web potencializa a versatilidade do seu negócio</h2>

            <p className="text-md mb-8 md:max-w-[65%]">Criamos websites e sistemas modernos, rápidos e estratégicos para empresas e criadores que querem se destacar.</p>


            <ButtonCallToAction descricao="Fale conosco" icone={FaPhone} pagina="contacto" />
        </section>
    )
}

export default Banner