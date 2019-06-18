import React from "react";
import Cartcount from './Cartcount';

class Cartsummary extends React.Component {
    updateCartTotal() {
        const products = Object.keys(this.props.cart);
        const total = products.reduce((prevTotal, index) => {
            return (parseFloat(prevTotal) + parseFloat(this.props.cart[index].price)).toFixed(2)
        }, 0);

        return total;
    }

    render() {
        return (
            <div className="cart-summary">
                <div className="cart-icon">
                    <img src="images/shopping-cart.svg" />
                </div>
                <div className="cart-summary__total">£{this.updateCartTotal()}</div>
                <Cartcount count={this.props.count}></Cartcount>
            </div>
        )
    }
}

export default Cartsummary;
