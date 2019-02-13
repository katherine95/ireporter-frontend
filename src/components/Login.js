import React from 'react';
import '../App.css';
import { LoginForm } from './LoginForm';

export class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: '',
          email: '',
          rememberMe: false
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const email = target.email;
        this.setState({
            [name]: value,
            [email]: value
        });
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.email);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="App-header">
            <div className="container">
                <div className="left"></div>
                <div className="right">
                    <LoginForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state}/>
                </div>
            </div>
        </div>
      );
    }
  }
