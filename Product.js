import './Product.css';
import { useEffect, useState } from "react";
import MyModel from "./MyModel";
import Cart from "./Cart";
function Product() {

    function funClick(event) {

        event.preventDefault();
        var x = parseInt(event.target.textContent);
        let lm = 0;
        let sk = 0;
        if (x === 1) {
            lm = 10;
            sk = 0;
            getAllProduct(lm, sk);
        }
        else if (x === 2) {
            lm = 10;
            sk = 10;
            getAllProduct(lm, sk);
        }
        else if (x === 3) {
            lm = 10;
            sk = 20;
            getAllProduct(lm, sk);
        }
        else {
            lm = 10;
            sk = 0;
            getAllProduct(lm, sk);
        }
    }
    let [list, setList] = useState([]);

    async function getAllProduct(lm, sk) {
        var response = await fetch('https://dummyjson.com/products?limit=' + lm + '&skip=' + sk);
        var result = await response.json();
        console.log(result);
        list = result.Products;
        setList(result.products);
        console.log(list);
    }
    let imgStyle = { "width": "100px", "height": "100px" };

    let [rowFlag, setRowFlag] = useState(false);
    let [rowData, setRowData] = useState({});

    function rowClick(obj) {
        console.log(obj);
        setRowFlag(true);
        setRowData(obj);
    }

    let [cart, setCart] = useState([]);
    function buttonClick(obj) {
        setCart([...cart, obj]);
    }

    let [cartFlag, setCartFlag] = useState(false);
    function funShowCart() {
        setCartFlag(true);
    }
    useEffect(() => {
        getAllProduct(10, 0);
    }, [1]);

    return (<>

        <h2>Product!!</h2>

        <table border="2" className='border'>
            <tr className='heading'>
                <td>Id</td>
                <td>Title</td>
                <td>Price</td>
                <td>Img</td>
                <td>Cart</td>
            </tr>
            {
                list.map((x) => {
                    return (
                        <tr key={x.id} onClick={() => { rowClick(x) }}>
                            <td>{x.id}</td>
                            <td>{x.title}</td>
                            <td>{x.price}</td>
                            <td><img style={imgStyle} src={x.thumbnail} /></td>
                            <td> <input type="button" value="Add to Cart" onClick={(event) => { event.stopPropagation(); buttonClick(x) }} className='cart' /></td>
                            <td></td>
                        </tr>
                    );
                })
            }
        </table>
        <p><span className='page'>Paggination!!!</span></p>

        <ul onClick={funClick} type="none">
            <li><a href=" "> 1</a></li>
            <li><a href=" "> 2</a></li>
            <li><a href=" "> 3</a></li>
        </ul>
        <input type='button' value="show cart" onClick={funShowCart} className='cool' />
        {
            cartFlag && <Cart cartList={cart} />
        }
        {
            rowFlag && <MyModel rowData={rowData} />
        }
    </>
    );
}
export default Product;
//list is local variable
