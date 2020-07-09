import React, {Component} from 'react';

const mainStyle = {
    width: '1340px',
    height: '650px',
    backgroundColor: '#e06666',
    padding: '20px',
    marginLeft: '20px',
    marginBottom: '20px',
    borderStyle: 'solid',
    display: 'inline-block',
};

class Main extends Component {
    render() {
        return (
            <div style={mainStyle}>
                {this.props.children}
            </div>
        )
    }
}

export default Main;