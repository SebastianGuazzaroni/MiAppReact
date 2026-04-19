import React from "react";
import "../css/AddTransaction.css";


export function AddTransaction(props){
    const transactionCategory = [
        nombre: 'Comida y Bebida',

    ]



    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <select>
                        <option value="someOption">Some option</option>
                        <option value="otherOption">Other option</option>
                    </select>
                </div>
                <div className="col">
                    <label>
                        <input type="radio" name="myRadio" value="option1" />
                        Option 1
                        </label>
                        <label>
                        <input type="radio" name="myRadio" value="option2" />
                        Option 2
                        </label>
                        <label>
                        <input type="radio" name="myRadio" value="option3" />
                        Option 3
                        </label>
                </div>
            </div>

        </div>
    );
}