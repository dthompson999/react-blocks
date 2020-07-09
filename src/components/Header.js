import React, {Component} from 'react';

const headerStyle = {
    width: 'auto',
    backgroundColor: '#6aa84f',
    padding: '60px',
    margin: '20px',
    borderStyle: 'solid',
};

class Header extends Component {
    render() {
        return (
            <div style={headerStyle}></div>
        )
    }
}

export default Header;