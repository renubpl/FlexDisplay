import * as Actions from '../actions/ActionTypes';

const CounterReducer = ( state = {count:0}, action) =>{
    switch(action.type){
        case Actions.COUNTER_INCREMENT:
            return Object.assign({}, state,{
                count: state.count + 1
            });
        default:
            return state;
    }
}

export default CounterReducer;