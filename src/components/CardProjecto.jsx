function CardProjecto() {
    return (
        <li className="min-w-[210px] max-w-[210px] flex-shrink-0 border border-gray-300 rounded-md bg-white shadow-md">
            <div className="bg-gray-500 h-20 text-center text-white">image</div>

            <section className="p-2 flex flex-col gap-2">
                <h3 className="text-xl text-gray-900">Loja Virtual</h3>
                <p className="text-wrap">Descriçao hdjkfj kdshfjk dhfjksdh jfgdjs syfiuwebf jwekhn fjweh fwebfj ebwewih wehfj</p>

                <button className="flex items-center justify-center py-2 px-3 bg-[#4285F4] hover:bg-[#668cca] rounded-md text-white cursor-pointer transition-all shadow-xl w-full m-auto">ver projecto</button>
            </section>
        </li>
    )
}

export default CardProjecto