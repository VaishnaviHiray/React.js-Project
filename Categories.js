import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Cart from "./Cart";

function Category() {

    let [category, setCategory] = useState([]);
    async function getCategory() {
        let response = await fetch('https://dummyjson.com/products/category-list');
        let result = await response.json();
        setCategory(result);
    }
    function funChange(event) {
        let txt = event.target.value;
        getCatProd(txt);
    }

    let [showCat, setShowCat] = useState([]);
    async function getCatProd(op) {
        let response = await fetch('https://dummyjson.com/products/category/' + op);
        let result = await response.json();
        console.log(result);
        setShowCat(result.products);
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
        getCategory();
    }, []);

    let imgStyle = { "width": "100px", "height": "100px" };

    return (
        <>
            <h3>Category</h3>
            <div>
                Select Category : <select onChange={funChange}>
                    <option>select</option>
                    {
                        category.map((x) => {
                            return <option key={x}>{x}</option>
                        })
                    }
                </select>
            </div>
            <Table className="table table-info table-hover table-bordered">
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Image</th>
                    </tr>
                    {
                        showCat.map((x) => {
                            return (
                                <tr key={x.id}>
                                    <td>{x.id}</td>
                                    <td>{x.title}</td>
                                    <td><img style={imgStyle} src={x.thumbnail}></img></td>
                                    <td> <input type="button" value="Add to Cart" onClick={(event) => { event.stopPropagation(); buttonClick(x) }} className='cart' /></td>

                                </tr>

                            )
                        })
                    }
                </tbody>
                <input type='button' value="show cart" onClick={funShowCart} className='cool' />
                {

                    cartFlag && <Cart cartList={cart} />
                }
            </Table>

        </>
    )
}
export default Category;