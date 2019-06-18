import React from "react";
import PropTypes from "prop-types";

class Product extends React.Component {
    static propTypes = {
        details: PropTypes.object,
        index: PropTypes.string,
        addToCart: PropTypes.func
    }

    handleClick = () => {
        this.props.addToCart({
            index: this.props.index,
            title: this.props.details.title,
            price: this.props.details.variants[0].price
        });
    }

    render() {
        const {images, title} = this.props.details;

        return (
            <div className="card">
                <div className="card__inner">
                    <div className="card__img-wrap">
                        <div className="card__img" style ={{ backgroundImage: `url(${images[0].src})` }}></div>
                    </div>
                    <div className="card__details">
                        <div className="card__title">
                            {title}
                        </div>
                        <div className="card__price">
                            &pound;{this.props.details.variants[0].price}
                        </div>
                    </div>
                    <div className="card__actions">
                        <button onClick={this.handleClick}>Add to cart</button>
                        {/* <button className="btn-secondary">Quick View</button> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
