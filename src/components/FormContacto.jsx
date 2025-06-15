

function FormContacto() {
    return (
        <form onSubmit={(event) => event.preventDefault()} className="flex flex-col gap-4 flex-1 justify-center border border-gray-300 max-w-90 p-4 rounded-md sm:mb-10 sm:m-auto">
            <h3 className="text-3xl text-[#4285F4] ">Faça uma consultoria</h3>

            <label className="flex flex-col gap-1">
                Nome completo *
                <input type="text" name="nome" className="outline-none border-b border-b-gray-300" required />
            </label>

            <label className="flex flex-col gap-1">
                Telefone *
                <input type="tel" name="telefone" className="outline-none border-b border-b-gray-300" required />
            </label>

            <label>
                <p className="my-4">Selecione um tópico *</p>

                <select name="topico" id="" className="max-w-full outline-none border-b border-b-gray-300 text-md" required>
                    <option value="assunto" disabled selected>Assunto</option>
                    <option value="orcamento" >Preciso de um orçamento</option>
                    <option value="seusiteperfeito" >Site perfeito para mim</option>
                </select>
            </label>

            <label>
                Mensagem

                <textarea name="mensagem" id="" maxLength="300" className="outline-none border border-gray-300 rounded-md mt-2 max-w-70 w-full"></textarea>
            </label>

            <button className="my-5 border border-[#4285F4] bg-[#4285F4] hover:bg-[#668cca] cursor-pointer text-white max-w-50 mx-auto py-1 px-3 rounded-md transition-all">Enviar</button>
        </form>
    )
}

export default FormContacto