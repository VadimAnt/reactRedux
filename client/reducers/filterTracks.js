const initialState = '';

export default function filterTracks(state = initialState, action){
    switch(action.type){
        case 'FIND_TRACK':
            return action.payload;
            break;
        default:
            return state;
    }
}