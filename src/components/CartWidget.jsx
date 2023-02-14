import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FaShoppingCart size={'30px'} color={'blue'}/> 
            <div className="qty-display">0</div>
            {/* <Link to={carrito}></Link> */}
        </div>
    )

}
export default CartWidget