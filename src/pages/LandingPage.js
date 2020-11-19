import React, { Component } from 'react'
import Signs from '../components/Zodiac/Signs'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default class LandingPage extends Component {    render() {
        return (
            <div>
            <h1 className="title-hdr">Zodiaks</h1>
                <h1 className="hdr">Choose Your Sign</h1>
            <Signs />
            </div>
        )
    }
}
