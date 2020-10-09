import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{ 
  render() {
   return (
    <div className="App">
      <div className="container">
        <div className="col-xs-12">
          <div className="text-center" style={{paddingTop: '30px', paddingBottom: '30px'}}>
            <img className="backdrop linktree" src="https://i.imgur.com/oggcsIG.jpg" />
            <h2 style={{color: '#ffffff', paddingTop: '20px'}}>First LastName</h2>
            <h3> Username</h3>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="col-xs-12">
            <div className="text-center">
              <div style={{paddingBottom: '30px'}}>
                <button onclick="location.href='http://bit.ly/2IZURI7'" type="button" className="btn shake" style={{width: '80%', paddingTop: '10px', paddingBottom: '10px'}}>Add to Contacts</button>
              </div>
              <div style={{paddingBottom: '30px'}}>
                <button onclick="location.href='http://bit.ly/2SVZXES'" type="button" className="btn btn-outline-light" style={{width: '80%', paddingTop: '10px', paddingBottom: '10px', fontWeight: 600}}>Instagram</button>
              </div>
              <div style={{paddingBottom: '30px'}}>
                <button onclick="location.href='#'" type="button" className="btn btn-outline-light" style={{width: '80%', paddingTop: '10px', paddingBottom: '10px', fontWeight: 600}}>Facebook</button>
              </div>
              <div style={{paddingBottom: '30px'}}>
                <button onclick="location.href='#'" type="button" className="btn btn-outline-light" style={{width: '80%', paddingTop: '10px', paddingBottom: '10px', fontWeight: 600}}>Snapchat</button>
              </div>
              <div style={{paddingBottom: '30px'}}>
                <button onclick="location.href='#'" type="button" className="btn btn-outline-light" style={{width: '80%', paddingTop: '10px', paddingBottom: '10px', fontWeight: 600}}>LinkedIn</button>
              </div>
              <div style={{paddingBottom: '30px'}}>
                <button onclick="location.href='#'" type="button" className="btn btn-outline-light" style={{width: '80%', paddingTop: '10px', paddingBottom: '10px', fontWeight: 600}}>Venmo</button>
              </div>
              <div style={{paddingBottom: '30px'}}>
                <button onclick="location.href='#'" type="button" className="btn btn-outline-light" style={{width: '80%', paddingTop: '10px', paddingBottom: '10px', fontWeight: 600}}>Tik Tok</button>
              </div>
              <div style={{padding: '100px', paddingTop: '0px', paddingBottom: '50px'}}>
                <button onclick="location.href='#'" type="button" className="btn shake" style={{width: '80%', paddingTop: '10px', paddingBottom: '10px', fontWeight: 600}}>Open in App</button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center" style={{paddingBottom: '30px'}}>
          <a href="https://www.alphaready.co" style={{color: '#34312f'}}>Copyright Dappy. All Rights Reserved.</a>
        </div>
      </div>
     </div>
    );
  }
};

export default App;
