import React from 'react'
import axios from 'axios' 
import { apiUrl } from './globalVariables.js'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    changeInput = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submit = e => {
        e.preventDefault()

        axios
        .post(`${apiUrl}/login`, this.state)
        .then(response => {
            localStorage.setItem('token', response.data.token)
            this.props.history.push('/jokes')
        })
        .catch(error => console.log(error))
    }



    render(){
        return(
            <div className='forms'>
                <form onSubmit={this.submit}>
                <div>Type Your Credentials</div>
                    <input 
                      placeholder='User Name'
                      value={this.state.username}
                      name='username'
                      id='username'
                      onChange={this.changeInput}
                    />
                    <input 
                      placeholder='Password'
                      value={this.state.password}
                      name='password'
                      id='password'
                      onChange={this.changeInput}
                    />
                    <div className='buttons'>
                        <button>Submit</button>
                            &nbsp;  &nbsp;
                        <Link to='/signup'><button>Sign Up</button></Link>
                    </div>
                 </form>
            </div>
        )
    }
}


export default Login