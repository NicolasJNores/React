import ItemDetailContainer from "./ItemDetailContainer"

const ProdList = ({productos, titulo}) => {
    return (
        <div className="container">
            <h2 className="main-title">{titulo}</h2>

            <div className="productos">
                {productos.map((prod) => <ItemDetailContainer producto={prod} key={prod.id}/>)}
            </div>

        </div>
    )
}

export default ProdList