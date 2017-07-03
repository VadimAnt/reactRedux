const initialState = [
    'playlist1',
    'playlist2'
];


export default function playList(state = initialState, action){
    console.log(state, action)
    switch(action.type){
        case 'ADD_PLAYLIST':
            return [
                ...state,
                action.payload
            ];
            break;
        case 'DELETE_PLAYLIST':
            return state;
            break;
        default:
            return state;
    }
}