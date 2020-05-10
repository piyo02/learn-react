import ActionType from './globalActionType';

// initialization state
const globalState = {
    totalOrder: 0
}

// 2. membuat reducer => mengupdate store
const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case ActionType.PLUS_ORDER:
            return {
                ...state,
                totalOrder: state.totalOrder + 1
            }    
            break;
        case ActionType.MINUS_ORDER:
            let totalOrder = state.totalOrder ? state.totalOrder - 1 : 0
            return {
                ...state,
                totalOrder: totalOrder
            }    
            break;
        default:
            return state;
    }
}

export default rootReducer;