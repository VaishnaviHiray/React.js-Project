import { Link } from "react-router-dom";

function Navigation() {
    return < >
        <ul >
            <li > < Link to="/" > Home </Link></li >
            <li > < Link to="/Product" > Product </Link></li >
            <li><Link to="/Categories">Categories</Link></li>
            <li > < Link to="/AddProduct" > Add Product </Link></li >
        </ul>
    </>
}
export default Navigation;