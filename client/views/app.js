import React from 'react';
import { connect } from 'react-redux';
import './global.css';


import TrackList from '../components/TrackList';

class App extends React.Component{
    render(){
        return (
            <div className="app-container">
                <TrackList/>
            </div>
        );
    }
}


export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({})
)(App);