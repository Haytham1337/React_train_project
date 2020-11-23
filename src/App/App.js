import React from 'react';
import logo from './img/logo.png';
import serch from './img/Search-512.png';
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom';
import './App.css';
import Game_ttt from '../Game_ttt/Game_ttt';
import About from '../App/About/About';
import NoteSave from '../App/Notes/NoteSave';
import Contacts from './Contacts/Contacts';


const array1 = {
  "Index":"/index",
  "Home":"/Home"

}


function App() {
  return (
    <Router>
        <div className="App">
            <div className="header-wrapper">
              <header className="App-header">
                <div className="container">
                    <div className="header__iner">
                      <div className="logo">
                          <img src={logo}/>
                      </div>
                      <nav className="nav">
                          <a className="nav_list" href="/">Home</a>
                          <a className="nav_list" href="/About">About</a>
                          <a className="nav_list" href="/Game_ttt">tic tac toe</a>
                          <a className="nav_list" href="/Notes">Notes</a>
                          <a className="nav_list" href="/Contacts">Contact</a>
                          <img id="serch-img"src={serch} />
                      </nav>
                    </div>    
                </div>
              </header>
            </div>
            <Switch>
              <Route exact path = "/"></Route>
              <Route exact path = "/Game_ttt" component={Game_ttt}></Route>
              <Route exact path = "/About" component={About}></Route>
              <Route exact path = "/Notes" component={NoteSave}></Route>
              <Route exact path = "/Contacts"  component={Contacts}></Route>
            <Game_ttt array={array1} />  
            </Switch>     
          </div>
        </Router>

  );
}

export default App;
