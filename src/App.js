import React, { Component } from 'react';
import { Route} from "react-router-dom";
import sample from './space.mp4';
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
      <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/sunmoon.jpg" />
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    <link rel="stylesheet" href="path/to/materialize.css"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <title>Zodiaks</title>
      <meta property="og:url" content={"https://zodiacs.netlify.app/horoscope/" + this.state.sign} />
      <meta property="og:type" content="Today's horoscope" />
      <meta property="fb:app_id" content="your fb id" />
      <meta property="og:title" content="Horoscope the day"/>
      <meta
      property="og:description"
      content="Today's Horoscope"/>

    <meta property="og:image" content={this.state.image}/>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Todays Daily Horoscope "/>
      <meta name="twitter:description" content=" Daily Horoscope."/>
      <meta name="twitter:image" content={this.state.image}/>
      <meta name="twitter:card" content="summary_large_image"/>
  </head>
        <main>
        <video className='videoTag' autoPlay loop muted>
          <source src={sample} type='video/mp4' />
         </video>
          <Route exact path='/' component={LandingPage} />
          <Route path={'/horoscope/:signId'} component={ThreeDayScope} />
        </main>
      </>
    )
  }
}

export default App;