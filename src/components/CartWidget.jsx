import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FaShoppingCart size={'30px'} color={'blue'}/> 
            <div className="qty-display">0</div>
        </div>
    )

}
export default CartWidget