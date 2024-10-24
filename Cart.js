import { useState } from "react";

function Cart(props) {
    var list = props.cartList;

    let [total, setTotal] = useState(0);
    function funCheck(event) {
        if (event.currentTarget.checked) {
            total = total + parseInt(event.currentTarget.value);
            setTotal(total);
        }
        else if (event.currentTarget.checked === false) {
            total = total - parseInt(event.currentTarget.value);
            setTotal(total);

        }
    }
    return (
        <>
            <h3>Cart Details</h3>

            <ul>
                {
                    list.map((x) => {
                        return <li>{x.title}*{x.price}<input type="Checkbox" value={x.price} onClick={funCheck} /></li>
                    })
                }

            </ul>
            <div>Total:{total}</div>
        </>
    )
}
export default Cart;