import React from "react";

class Sitelogo extends React.Component {
    render() {
        return (
            <a href="#" className={"site-logo " + (this.props.alt ? 'alt' : '') }>
                <span className="site-logo__main">ECLECTEES</span>
                <span className="site-logo__sub">CO</span>
            </a>
        )
    }
}

export default Sitelogo;
