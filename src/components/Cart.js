import React from "react";
import Cartcount from './Cartcount';

class Cart extends React.Component {
    updateCartTotal() {
        const products = Object.keys(this.props.cart);
        const total = products.reduce((prevTotal, index) => {
            return (parseFloat(prevTotal) + parseFloat(this.props.cart[index].price)).toFixed(2)
        }, 0);

        return total;
    }

    uniqueKey(key) {
        return `${key}_${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`;
    }

    render() {
        const cartIds = Object.keys(this.props.cart);
        let cartOutput = null;
        if (this.props.cart.length > 0) {
            cartOutput = cartIds.map((cart, index) =>
            <li key={this.uniqueKey(this.props.cart[index].id)}>
                <div className="cart-items">
                    <div>{this.props.cart[index].title}</div>
                    <div className="price">&pound;{this.props.cart[index].price}</div>
                </div>
                <div className="remove" onClick={() => this.props.removeFromCart(index)}>Remove</div>
            </li>
            )
        }
        else {
            cartOutput = "Your cart is currently empty!"
        }

        return (
            <div className="cart">
                <div className="cart-inner">
                    <header>
                        <div className="cart-title">Cart</div>
                        <Cartcount count={this.props.count}></Cartcount>
                    </header>
                    <ul className="cart-output">
                        {cartOutput}
                    </ul>
                    <footer>
                        <p className="label">Total:</p>
                        <p className="figure">&pound;{this.updateCartTotal()}</p>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Cart;
