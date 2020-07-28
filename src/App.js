import React, { Component } from 'react';
import { Route} from "react-router-dom";
//import sample from './space.mp4';


import signInfo from './data/horoscope2.json'
import ThreeDayScope from './components/ThreeDayScope/ThreeDayScope'
import LandingPage from './pages/LandingPage'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      signInfo
    }
  }


  render() {
    return (
      <>
              <h1 className="title-hdr">Zodiaks</h1>

        <main>
        {/* <video className='videoTag' autoPlay loop muted>
          <source src={sample} type='video/mp4' />
        </video> */}
          <Route exact path='/' component={LandingPage} />
          <Route path={'/horoscope/:signId'} component={ThreeDayScope} />
        </main>
      </>
    )
  }
}

export default App;