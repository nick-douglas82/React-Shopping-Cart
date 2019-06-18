import './App.css'
import React, {Component} from 'react'
import Sitelogo from './components/Sitelogo';
import Cartsummary from './components/Cartsummary';
import Productlist from './components/Productlist';
import Cart from './components/Cart';

class App extends Component {
    state = {
        cart: []
    }

    addToCart = obj => {
        let product = {}, cart = this.state.cart;
        product.id = obj.index;
        product.title = obj.title;
        product.price = obj.price;
        cart.push(product);
        this.setState({ cart });
    }

    removeFromCart = key => {
        const cart = this.state.cart;
        cart.splice(key, 1);
        this.setState(cart);
    }

    render() {
        return (
        <div className="App">
            <header className="site-header">
                <div className="wrapper">
                    <Sitelogo alt={false}></Sitelogo>
                    <Cartsummary count={this.state.cart.length} cart={this.state.cart}></Cartsummary>
                </div>
            </header>
            <header className="page-header"></header>
            <main className="content-main">
                <div className="wrapper">
                    <div className="products">
                        <Productlist addToCart={this.addToCart}></Productlist>
                    </div>
                    <aside className="content-side">
                        <Cart cart={this.state.cart} count={this.state.cart.length} removeFromCart={this.removeFromCart}></Cart>
                    </aside>
                </div>
            </main>
            <footer className="site-footer">
                <div className="wrapper">
                    <Sitelogo alt={true}></Sitelogo>
                    <div className="copyright">&copy;Eclectees Co Ltd. 2018</div>
                    <ul>
                        <li>
                            <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )}
}

export default App
