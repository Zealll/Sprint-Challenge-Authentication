import React from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';

import { apiUrl } from './globalVariables'




class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    submit = e => {
        e.preventDefault()

        Axios
        .post(`${apiUrl}/register`, this.state)
        .then(response => {
           console.log(response)
        })
    }

    changeInput = e => {
        this.setState({[e.target.name]: e.target.value})
    }







    render() {
        return(
            <div className='forms'>
                <form onSubmit={this.submit}>
                <div>Type Your Credentials</div>
                    <input 
                      placeholder='User Name'
                      name='username'
                      id='username'
                      onChange={this.changeInput}
                      value={this.state.username}
                    />
                    <input 
                      placeholder='Password'
                      name='password'
                      id='password'
                      onChange={this.changeInput}
                      value={this.state.password}
                    />
                    <button>Submit</button>
                    <Link to='/'><button>back to Log In</button></Link>
                </form>
            </div>
        )
    }
}

export default SignUp