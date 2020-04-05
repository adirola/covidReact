import update from 'immutability-helper'

export default (state = {},action) => {
    switch(action.type){
        case 'AUTH' : return update(state,{loading:{$set:action.payload.loading},info:{$set:action.payload.info}});
        default : return state
    }
}