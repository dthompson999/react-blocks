import React, {Component} from 'react';

const navigationStyle = {
    width: '300px',
    height: '500px',
    backgroundColor: '#6fa8dc',
    marginLeft: '20px',
    padding: '40px',
    borderStyle: 'solid',
    display: 'inline-block',
};

class Navigation extends Component {
    render() {
        return (
            <div style={navigationStyle}></div>
        )
    }
}

export default Navigation;