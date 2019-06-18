import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Product from "./Product";

class Productlist extends React.Component {
    static propTypes = {
        addToCart: PropTypes.func
    }

    state = {
        products: {}
    }

    componentWillMount() {
        this.getProducts();
    }

    async getProducts() {
        try {
            const response = await axios.get('https://j-parre.myshopify.com/products.json');

            const products = response.data.products.sort((a, b) => {
                var textA = a.title.toUpperCase();
                var textB = b.title.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });

            this.setState({ products });
        } catch (error) {
            console.error(error);
        }
    }

    sort = (event) => {
        const sortValue = event.target.value;

        if (sortValue === 'titleAZ') {
            this.alphabetical(sortValue, this.state.products);
        }
        else if (sortValue === 'titleZA') {
            this.alphabetical(sortValue, this.state.products);
        }
        else if (sortValue === 'priceHighLow') {
            this.price(sortValue, this.state.products);
        }
        else {
            this.price(sortValue, this.state.products);
        }
    }

    alphabetical(sortValue, products) {
        products.sort((a, b) => {
            if (sortValue === 'titleAZ') {
                var textA = a.title.toUpperCase();
                var textB = b.title.toUpperCase();
            }
            else {
                var textB = a.title.toUpperCase();
                var textA = b.title.toUpperCase();
            }
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });

        this.setState({ products });
    }

    price(sortValue, products) {
        products.sort((a, b) => {
            return (sortValue === 'priceHighLow') ? b.variants[0].price - a.variants[0].price : a.variants[0].price - b.variants[0].price;
        });

        this.setState({ products });
    }

    render() {
        return (
            <React.Fragment>
                <div className="filters">
                    <label>
                        Sort by:
                    </label>
                    <select className="filter" value="titleAZ" onChange={this.sort}>
                        <option value="priceHighLow">Price High - Low</option>
                        <option value="priceLowHigh">Price Low - High</option>
                        <option value="titleAZ">Title A - Z</option>
                        <option value="titleZA">Title Z - A</option>
                    </select>
                </div>
                <div className="product-list">
                    {Object.keys(this.state.products).map(key =>
                        <Product
                            key={key}
                            index={key}
                            details={this.state.products[key]}
                            addToCart={this.props.addToCart}
                        />
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default Productlist;
