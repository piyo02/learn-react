import React, {Component} from 'react';
import {connect} from 'react-redux';
import ActionType from '../../../../redux/reducer/globalActionType';

class Counter extends Component {
    // handleCounterChange = (value) => {
    //     this.props.onCounterChange(value)
    // }

    // handlePlus = () => {
    //     // this mengarah ke global
    //     this.setState({
    //         order: this.state.order + 1
    //     }, _ => {
    //         this.handleCounterChange(this.state.order)
    //     })
    // } 

    // handleMinus = () => {
    //     if(!this.state.order) return
    //     this.setState({
    //         order: this.state.order - 1
    //     }, _ => {
    //         this.handleCounterChange(this.state.order)
    //     })
    // }

    render() {
        console.log(this.props);
        return (
            <div className="counter">
                <button className="minus" onClick={this.props.handleMinus}>-</button>
                <input type="text" value={this.props.order}/>
                <button className="plus" onClick={this.props.handlePlus}>+</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}),
        handleMinus: () => dispatch({type: ActionType.MINUS_ORDER})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// connect (paramStateGlobal, dispatch)