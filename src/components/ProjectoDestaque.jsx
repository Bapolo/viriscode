import CardProjecto from "./CardProjecto"


function ProjetoDestaque() {
    return (
        <ul className="my-6 flex gap-2 overflow-auto w-full p-4 md:m-auto md:w-[80vw]">
            <CardProjecto />
            <CardProjecto />
            <CardProjecto />
            <CardProjecto />
        </ul>
    )
}

export default ProjetoDestaque