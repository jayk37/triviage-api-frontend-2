import React from "react";
import 'tachyons';
import Containers from './Containers';
import logo from './logo.svg';
import './App.css';
class Heading extends React.Component{
    render(){
        return(
            <div className="tc f3">
                <h1>TRIVIAGE</h1>
                <h2>Your daily source of facts 🤓</h2>
                <br></br>
                <img src= {logo} className="App-logo grow-large" alt="logo"/>
                <h2>Select domain of interest</h2>
                <div >
                    <Containers name="Maths" />
                    <br></br>
                    <Containers name="Trivia" />
                    <br></br>
                    <Containers name="Date" />
                </div>
            </div>
        )
    }
}
export default Heading;