
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


export default class App extends Component {

  /* const APp =()=>{ 
    const [progress,setProgress]=useState(0),


  }
   remove this.state from all
    remove render  
    export default app
    */
  apikey="f2feb3c29120476e970299372d4f776e"
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <Router>
          < Navbar />
          <LoadingBar
          height={4}
        color='#f11946'
        progress={this.state.progress}
       
      />
         
          <Switch>
          <Route exact path="/">
          <News setProgress={this.setProgress} apikey={this.apikey}  key="general" country="in" category="General" pageSize={9} />
          </Route>
          <Route exact path="/sports">
          <News setProgress={this.setProgress} apikey={this.apikey} country="in" key="sports" category="Sports" pageSize={9} />
          </Route>
          
          <Route exact path="/technology">
          <News setProgress={this.setProgress} apikey={this.apikey} country="in" key="technology" category="Technology" pageSize={9} />
          </Route>
          <Route exact path="/business">
          <News setProgress={this.setProgress} apikey={this.apikey} country="in" key="business" category="business" pageSize={9} />
          </Route>
         
        </Switch>
        </Router>
      </div>
    )
  }
}

