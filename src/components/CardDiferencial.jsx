import "./CardDiferencial.css"

function CardDiferencial({ icon: Icon, descricao, corIcon }) {
    return (
        <li className="flex flex-col items-center justify-center gap-5 p-4 border border-gray-300 rounded-md w-80 m-auto bg-gray-100 md:w-80 md:h-40 hide-scrollbar hide-scrollbar">
            <Icon className={`text-2xl ${corIcon}`} />
            <p className="text-center flex flex-wrap">{descricao}</p>
        </li>
    )
}

export default CardDiferencial