import "../App.css";     

export function TransactionItem({title="Transaction", type="info", mount="total"}){
    const classes = `notification ${type}`


    return (
        <div className="row transactioItem">
            <div className="col-3">
                <h2>{title}</h2>
            </div>
            <div className="col-3">
                <p>{type}</p>
            </div>
            <div className="col-3">
                <p>{mount}</p>
            </div>
        </div>
    )

}   