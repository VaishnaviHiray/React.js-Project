import './AddProduct.css';
import { useRef } from "react";

function AddProduct() {
    var txtId = useRef();
    var txtTitle = useRef();
    var txtPrice = useRef();


    async function funInsert() {
        var response = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: txtId.current.value,
                title: txtTitle.current.value,
                price: txtPrice.current.value


            })
        });
        var result = await response.json();
        console.log(result);
    }
    return (
        <>
            <form>
                <div>
                    Id:<input type="text" ref={txtId} />
                </div>
                <div>
                    Title:<input type="text" ref={txtTitle} />
                </div>
                <div>
                    Price:<input type="text" ref={txtPrice} />
                </div>
                <div>
                    <input type="button" onClick={funInsert} value="Submit" className="color" />
                </div>
            </form>
        </>
    );
}
export default AddProduct;