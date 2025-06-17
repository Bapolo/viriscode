import Banner from "./Banner"
import CardDiferencial from "./CardDiferencial"
import { FaPalette } from "react-icons/fa"
import { BsLightningChargeFill } from "react-icons/bs"
import { BsLockFill } from "react-icons/bs"
import { FaHandshakeSimple } from "react-icons/fa6"
import { FaTools } from "react-icons/fa"
import FormContacto from "./FormContacto"
import ButtonCallToAction from "./ButtonCallToAction"
import { BiSolidChevronLeft } from "react-icons/bi"
import ProjetoDestaque from "./ProjectoDestaque"

function Main() {
    return (
        <main className="mt-5">
            <Banner />

            <section className="text-gray-700 py-6 px-4">
                <section className="flex-1">
                    <h2 className="text-2xl text-gray-900 mb-5">Por que escolher a Viris code?</h2>

                    <p className="mb-5">A Viris Code é uma empresa jovem, ousada e conectada com as necessidades reais do mercado. Fundada por Jesus Bapolo, nossa missão é entregar tecnologia acessível, inteligente e que gera resultados.</p>

                    <ul className="text-md border-t mt-10 border-t-gray-300 py-2 flex flex-col justify-center gap-2 md:flex-row md:overflow-x-auto md:px-2 md:items-center md:justify-start">

                        <CardDiferencial icon={FaPalette} descricao="Design responsivo e moderno" corIcon="text-[#4285F4]" />

                        <CardDiferencial icon={BsLightningChargeFill} descricao="Performance otimizada" corIcon="text-[#4285F4]" />

                        <CardDiferencial icon={BsLockFill} descricao="Segurança e boas práticas" corIcon="text-[#4285F4]" />

                        <CardDiferencial icon={FaHandshakeSimple} descricao="Atendimento próximo e humanizado" corIcon="text-[#4285F4]" />

                        <CardDiferencial icon={FaTools} descricao="Projetos personalizados do zero" corIcon="text-[#4285F4]" />
                    </ul>
                </section>

                <section className="flex flex-col items-center md:items-start md:gap-4 md:flex-row gap-10 md:justify-center mt-8  p-4">
                    <FormContacto />

                    <section className="border border-gray-300 rounded-md p-4">
                        <h3 className="text-4xl text-gray-900 mb-6">Serviços</h3>

                        <ul className="list-disc list-inside font-medium text-xl text-gray-700">
                            <li className="mb-4">Sites Institucionais</li>
                            <li className="mb-4">Sistemas Web Sob Medida</li>
                            <li className="mb-4">Landing Pages e Microsites</li>
                            <li className="mb-4">Consultoria e Suporte Técnico</li>
                        </ul>

                        <ButtonCallToAction descricao="Saiba mais" icone={BiSolidChevronLeft} pagina="servicos" />
                    </section>
                </section>

            </section>

            <ProjetoDestaque />
        </main>
    )
}

export default Main