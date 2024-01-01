import '../../styles/CartButton.css';
import CartIcon from './Icons/CartIcon';

export default function CartButton() {
  return (
    <div className="cart-container">
      <button id="btn">
        <CartIcon />
        <p>Sepetim</p>
        <div id="cart-counter">
          <p style={{ margin: 5 }}>1</p>
        </div>
      </button>
    </div>
  );
}
