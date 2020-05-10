import React, {Component} from 'react';
import Counter from './Counter';


class CardProduct extends Component {
    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="" alt=""/>
                </div>
                <p className="product-title"></p>
                <p className="product-price"></p>
                <Counter onCounterChange={(value) => this.props.onCounterChange(value) } />
            </div>
        );
    }
}

export default CardProduct;