import React from 'react';
import { connect } from 'react-redux';

import List from './list';
import { getTracks } from '../../actions/tracks';


class TrackList extends React.Component{
    addTrack(){
        console.log(this.trackInput.value);
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }

    findTrack(){
        console.log(this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value);
    }

    render(){
        console.log(this.props.tracks);
        return (
            <div>
                <div>
                    <input type="text" ref={(input) => { this.trackInput = input }} className="trackInput"/>
                    <button className="addTrack" onClick={this.addTrack.bind(this)}>Add track</button>
                </div>
                <div>
                    <input type="text" ref={(input) => { this.searchInput = input }} className="findInput"/>
                    <button className="findTrack" onClick={this.findTrack.bind(this)}>Find track</button>
                </div>
                <div>
                    <button onClick={this.props.onGetTracks}>Get tracks</button>
                </div>
                <div>
                    <ul>
                        {
                            this.props.tracks.map((track, index) => {
                                return <List key={index} name={track.name}/>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
    }),
    dispatch => ({
        onAddTrack: (name) => {
            const payload = {
                id: Date.now().toString(),
                name: name
            };
            dispatch({
                type: 'ADD_TRACK',
                payload: payload
            });
        },
        onFindTrack: (name) => {
            dispatch({
                type: 'FIND_TRACK',
                payload: name
            });
        },
        onGetTracks: () => {
            dispatch(getTracks());
        }
    })
)(TrackList);