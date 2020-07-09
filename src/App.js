import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';

const appStyle = {
  backgroundColor: '#dddddd',
  width: 'auto',
  margin: '40px',
  borderStyle: 'solid',
  textAlign: 'left',
}

function App() {
  return (
    <div className="App" style={appStyle}>
      <Header />
        <Navigation />
        <Main>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </Main>
    </div>
  );
}

export default App;
