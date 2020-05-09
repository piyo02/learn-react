import React, {Component, Fragment} from 'react';

class CardProduct extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (value) => {
        this.props.onCounterChange(value)
    }

    handlePlus = () => {
        // this mengarah ke global
        this.setState({
            order: this.state.order + 1
        }, _ => {
            this.handleCounterChange(this.state.order)
        })
    } 

    handleMinus = () => {
        if(!this.state.order) return
        this.setState({
            order: this.state.order - 1
        }, _ => {
            this.handleCounterChange(this.state.order)
        })
    }

    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="" alt=""/>
                </div>
                <p className="product-title"></p>
                <p className="product-price"></p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order}/>
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        );
    }
}

export default CardProduct;