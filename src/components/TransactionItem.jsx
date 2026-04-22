import "../css/TransactionItem.css";     

export function TransactionItem({type="", date="", amount="", category = "", description= "Sin descripcion"}){
    
    return (
        <div className="row transactioItem">
            <div className="col-2">
                <h2>{type}</h2>
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
            <div className="col-4">
                <p>{description}</p>
            </div>
        </div>
    );
}   