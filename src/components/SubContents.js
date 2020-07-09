import React, {Component} from 'react';

const subcontentsStyle = {
    width: '420px',
    height: '550px',
    marginLeft: '15px',
    backgroundColor: '#ffd966',
    borderStyle: 'solid',
    display: 'inline-block',
};

class SubContents extends Component {
    render() {
        return (
            <div style={subcontentsStyle}></div>
        )
    }
}

export default SubContents;