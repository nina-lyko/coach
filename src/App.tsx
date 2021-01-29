import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { MainPage } from './Components/MainPage/MainPage';
import { About } from './Components/About/About';
import { Contacts } from './Components/Contacts/Contacts';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/coach/about">
            <About />
          </Route>

          <Route path="/coach/contacts">
            <Contacts />
          </Route>

          <Route path="/coach">
            <MainPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
