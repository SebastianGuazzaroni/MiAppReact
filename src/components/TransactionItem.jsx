import "../css/TransactionItem.css";

export function TransactionItem({type="", date="", amount="", category = "", description= "Sin descripcion", variant=""}){
    
    return (
        <div className={`transactionItem row row-cols-2 row-cols-md-5 g-2 ${variant} rounded-3 ms-2`}>
            <div className="col">
                <p className="mb-0">{type}</p>
            </div>
            <div className="col">
                <p className="mb-0">{category}</p>
            </div>
            <div className="col d-none d-md-block">
                <p className="mb-0">{date}</p>
            </div>
            <div className="col">
                <p className="mb-0">{amount}</p>
            </div>
            <div className="col d-none d-md-block">
                <p className="mb-0 text-truncate">{description}</p>
            </div>
        </div>
    );
}   