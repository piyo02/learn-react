const redux = require('redux');
// 4 step

// initialization state
const initialState = {
    value: 0,
    age: 17
}

// 2. membuat reducer => mengupdate store
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_AGE":
            return {
                ...state,
                age: state.age + 1
            }    
            break;
        case "CHANGE_VALUE":
            return {
                ...state,
                value: state.value + action.newValue
            }    
            break;
        default:
            return state;
    }
}

// 1. membuat store
const createStore = redux.createStore;
const store = createStore( rootReducer );
console.log( store.getState() )

// 4. subscription => proses pemanggilan store yang diperlukan, otomatis terpanggil ketika store berubah
store.subscribe(() => {
    console.log('store change: ', store.getState());
})

// 3. Dispatch / action => pemanggilan instruksi reducer
// dispatch dipanggil di component yang merubah state
store.dispatch( {type: 'ADD_AGE'} )
store.dispatch( {type: 'CHANGE_VALUE', newValue: 10} )
console.log( store.getState() )