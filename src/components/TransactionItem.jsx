import "../css/TransactionItem.css";

export function TransactionItem({type="", date="", amount="", category = "", description= "Sin descripcion", variant=""}){
    
    return (
        <div className={`transactionItem row ${variant} rounded-3`}>
            <div className="col-2">
                <p>{type}</p>
            </div>
            <div className="col-2">
                <p>{category}</p>
            </div>
            <div className="col-2">
                <p>{date}</p>
            </div>
            <div className="col-2">
                <p>{amount}</p>
            </div>
            <div className="col-2">
                <p>{description}</p>
            </div>
        </div>
    );
}   