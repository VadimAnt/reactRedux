//THIS AJAX
var mockApiData = [
    {
        id: 1,
        name: 'Track1'
    },
    {
        id: 2,
        name: 'Track2'
    },
    {
        id: 3,
        name: 'Track3'
    },
    {
        id: 4,
        name: 'Track4'
    },
    {
        id: 5,
        name: 'Track5'
    }
];

export const getTracks = () => dispatch => {
    setTimeout(() => {
        console.log('I got tracks');
        dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData });
    }, 2000);
};