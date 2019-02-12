import React from 'react';
import '../App.css';

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
                    <form onSubmit={this.handleSubmit} className="form">
                        <label>
                            Name:
                            <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input type="email" name="email" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <br />
                        <label>
                            <input name="rememberMe" type="checkbox" checked={this.state.rememberMe} onChange={this.handleChange} />Remember Me
                        </label>
                        <br />
                        <button type="submit" value="Submit">Log In</button>
                        <br />
                        <br />
                        <p>Create an account?</p><br /><button type="submit" value="Submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
      );
    }
  }
