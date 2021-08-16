import './App.css';
import img from "./img2.jpg";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
        FirstName:"Saadaoui",
        LastName:"Abderraouf",
        Age:32,
        Education:"L.F.informatique",
        Profession:"developer",
        show: false,
        count:0,
        Input:0,
        description:""
        };
        const interval = setInterval(() => {
            this.setState({count: this.state.count+1})
          }, 1000);
      }
      render() {
        const showFun = () => {
          this.setState({ show: !this.state.show });
          };
          const add = () => {
            this.setState({ Input: this.state.Input+1 });
          };
          const moin = () => {
            this.setState({ Input: this.state.Input-1 });
          };
          const change = (e) => {
            this.setState({ description:e.target.value });
          };
        return (
            <div className='profile'>
              
                 {this.state.show && (
                   
                 <div> <br/>
                   <div style={{backgroundColor:'crimson',display:'flex',justifyContent:'center'}}> <h1 className='pro'>My Profile</h1> </div>
            <p>
              <br/>
              My First Names is : {this.state.FirstName} <br/>
              My Last Names is : {this.state.LastName} <br/>
              My Age is : {this.state.Age}
              <br /> i have certificate : {this.state.Education}
              <br /> and i work as : {this.state.Profession} <br/>
              {this.state.count}
            </p>
            <img className="pic" height="300" src={img} alt="pic"/> <br/> <br/>
            <input type="text" placeholder="write something" onChange={change}/><br/> <br/>
           <center> <p className='parag'>{this.state.description}</p> </center> <br/>
           <p>{this.state.Input}</p> <br/> 
          </div>
        )}
        <br/> 
        <Button className='but1' variant="danger" onClick={add}>Plus</Button>
        <Button className='but2' variant="outline-success" onClick={moin}>Moin</Button>
        <Button className='but3' variant="primary" onClick={showFun}>Click Me</Button>
        <br/> 
            </div>
        );
    }
}