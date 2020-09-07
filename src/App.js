import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import PostDetails from './Components/PostDetails/PostDetails';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    
          <Router>
            <Switch>
               <Route exact path="/">
                     <Home></Home>
               </Route>
               <Route exact path="/post/:postId">
                     <PostDetails></PostDetails>
               </Route>
               <Route  path="*">
                     <NotFound></NotFound>
               </Route>
            </Switch>
          </Router>
    
  );
}

export default App;
