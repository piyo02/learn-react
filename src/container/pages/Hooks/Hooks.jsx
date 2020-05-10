import React, {Component, useState, useEffect} from 'react';

// class Hooks extends Component {
//     state = {
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <p>Nilai saya saat ini adalah: {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         );
//     }
// }

const Hooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // component mount and update
        document.title = `Title Change: ${count}`;
        // component will unmount
        return () => {
            document.title = 'React App';
        }
    });

    return (
        <div>
            <p>Nilai saya saat ini adalah: {count}</p>
            <button onClick={ () => setCount(count +1) }>Update Nilai</button>
        </div>
    );
}

export default Hooks;