import React, {Component} from 'react';

const advertisementStyle = {
    width: 'auto',
    backgroundColor: '#b4a7d6',
    padding: '30px',
    margin: '20px',
    borderStyle: 'solid',
};

class Advertisement extends Component {
    render() {
        return (
            <div style={advertisementStyle}></div>
        )
    }
}

export default Advertisement;