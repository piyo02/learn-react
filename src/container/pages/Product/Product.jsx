import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import CardProduct from './CardProduct/CardProduct';
import './Product.css';

class Product extends Component {
    // state = {
    //     order: 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="" alt=""/>
                        <div className="count">{this.props.order}</div>
                    </div>
                </div>
                <CardProduct />
                {/* <CardProduct onCounterChange={ value => this.handleCounterChange(value) }/> */}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(Product);