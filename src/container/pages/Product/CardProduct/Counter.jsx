import React, {Component} from 'react';

class Counter extends Component {
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
            <div className="counter">
                <button className="minus" onClick={this.handleMinus}>-</button>
                <input type="text" value={this.state.order}/>
                <button className="plus" onClick={this.handlePlus}>+</button>
            </div>
        );
    }
}

export default Counter;