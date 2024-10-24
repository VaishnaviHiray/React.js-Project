import { useState } from "react";

function ProductList(props) {

    let list = props.data;

    let [rowClick, setRowClick] = useState(false);
    let [rowData, setRowData] = useState();

    function funRowClick(obj) {
        setRowData(obj);
        setRowClick(true);
    }

    let myStyle = { width: "100px", height: "100px" };

    return (<>
        <table border="2" >
            <tr >
                <td > Id </td>
                <td > Title </td>
                <td > Brand </td>
                <td > Price </td>
                <td > Rating </td>
                <td > QRCode </td>
                <td > Image </td>
            </tr > {
                list.map((x) => {
                    return <tr key={x.id}
                        onClick={
                            () => { funRowClick(x) }
                        } >
                        <td > {x.id} </td>
                        <td > {x.title} </td>
                        <td > {x.brand} </td>
                        <td > {x.price} </td>
                        <td > {x.rating} </td>
                        <td > <img src={x.meta.qrCode}
                            style={myStyle}alt="img"> </img></td >
                        <td > <img src={x.thumbnail}
                            style={myStyle}
                            alt="img"> </img></td >
                    </tr>
                })
            }
        </table>
        </>
    );
}
export default ProductList;