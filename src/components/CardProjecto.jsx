function CardProjecto() {
    return (
        <li className="border border-gray-300" style={{flexBasis: "200px"}}>
            <div className="bg-gray-500 h-20 text-center text-white">image</div>
            <section className="p-2 ">
                <h3>titulo</h3>
                <p>Descriçao</p>
                <button className="flex items-center justify-center py-2 px-3 bg-[#4285F4] hover:bg-[#668cca] rounded-md text-white cursor-pointer transition-all shadow-xl">ver projecto</button>
            </section>
        </li>
    )
}

export default CardProjecto