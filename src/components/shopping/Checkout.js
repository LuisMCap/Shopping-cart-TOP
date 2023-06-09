import { useState, useEffect } from 'react';
import amazonImg from '../../assets/Amazon.png'
import paypalImg from "../../assets/PayPal.svg.png";
import { Link } from "react-router-dom";

const Checkout = (props) => {
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let newPrice = 0
        props.cartItems.forEach(item=>{
            newPrice += item.total
        })
        setTotalPrice(newPrice)
    }, [props.cartItems]);

      const handleCheckoutClick = (e) => {
        if (props.cartItems.length === 0) {
          alert("You don't have a champion in the car")
          return
        }
        props.setOpenModal(true);
      };

    return (
      <div id="checkout">
        <div id="shopping-cart-info-cont" className="single-checkout-cont">
          <div className="shopping-cart-info" id="subtotal-cont">
            <div id="subtotal-title">Subtotal</div>
            <div id="subtotal-price">{totalPrice}</div>
          </div>
          <div className="shopping-cart-info" id="taxes-info-cont">
            <div id="taxes-info">
              Taxes and shipping will be calculated at checkout
            </div>
          </div>
          <div className="shopping-cart-info" id="currency-info-cont">
            <div id="currency-info">Orders will be processed in IP</div>
          </div>
        </div>
        <div id="checkout-btn-cont" className="single-checkout-cont">
          <button
            className="checkout-btn"
            id="checkout-click"
            onClick={handleCheckoutClick}
          >
            CHECKOUT
          </button>
          <button
            className="checkout-btn btn-img-btn"
            id="amazon"
            onClick={handleCheckoutClick}
          >
            <img src={amazonImg} id="amazon-img" className="btn-img" />
          </button>
          <button
            className="checkout-btn btn-img-btn"
            id="paypal"
            onClick={handleCheckoutClick}
          >
            <img src={paypalImg} id="paypal-img" className="btn-img" />
          </button>
        </div>
        <div id="continue-shopping-cont" className="single-checkout-cont">
          <Link id="continue-shopping" to={"/champions"} className="link-style">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    );
}

export default Checkout