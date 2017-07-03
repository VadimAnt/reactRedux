const initialState = [];

export default function playList(state = initialState, action){
    switch(action.type){
        case 'ADD_TRACK':
            return [
                ...state,
                action.payload
            ];
            break;
        case 'FETCH_TRACKS_SUCCESS':
            return action.payload;
            break;
        case 'DELETE_TRACK':
            return state;
            break;

        default:
            return state;
    }
}