import React from "react";

class Cartcount extends React.Component {
    render() {
        return (
            <div className="cart-count">{this.props.count}</div>
        )
    }
}

export default Cartcount;
