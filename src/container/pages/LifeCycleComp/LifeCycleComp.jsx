import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

class LifeCycleComp extends Component{
    // umumnya digunakan constructor, render, componentDidMount, componentDidUpdate, componentWillUnmount

    // lifecycle sesuai urutan
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        // return null sebagai defaultnya
        return null;
    }

    countChange = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log('render')
        return(
            <Fragment>
                <button onClick={this.countChange}>Component Button {this.state.count} </button>
                <hr/>
            <p>Total Order: {this.props.order}</p>
            </Fragment>
        );
    }

    componentDidMount(){
        console.log('componentDidMount')
        // setTimeout(_ => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 5000)
    }
    // proses selesai sampai mounting untuk pertama kali

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        if(nextState.count >= 5) return false
        // return true jika ingin component dapat di update, dan false jika tidak ingin diupdate
        return true;

    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        // return null sebagai defaultnya
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')

    }
    
    componentWillUnmount(){
        console.log('componentWillUnmount')

    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(LifeCycleComp);