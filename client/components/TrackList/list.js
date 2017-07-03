import React from 'react';

class List extends React.Component{
    render(){
        console.log(this.props);
        return (
            <li key={this.props.iter}> {this.props.name} </li>
        );
    }
}


export default List;