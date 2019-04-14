import React from 'react'
import axios from 'axios'
import { apiUrl } from '../auth/globalVariables'


class Jokes extends React.Component {
    constructor(){
        super();
        this.state = {
            jokes: [],
            error: ''
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        const options = {
            headers: {
                Authorization: token
            }
        }
        axios
        .get(`${apiUrl}/jokes`, options)
        .then(res => this.setState({jokes: res.data}))
        .catch(err => this.setState({error: err}))
    }




    render(){
        return(
            <div>
                {this.state.jokes.map(jokeList => (
                    <div>
                        <ul>
                            <li>{jokeList.joke}</li>
                        </ul>
                    </div>
                ))}
            </div>
        )
    }
}


export default Jokes
