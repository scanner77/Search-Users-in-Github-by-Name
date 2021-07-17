import React, { Component } from 'react'
import Navbar from './Components/layout/Navbar';
import Users from './Components/users/Users'
import axios from 'axios'
import Search from './Components/users/Search';

const Github = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: {Authorization: process.env.REACT_APP_GITHUB_CLIENT_ID}
})


 class App extends Component {
  state = {
    users:[],
    loading: false
  }

     componentDidMount = async () => {
       this.setState({loading: true});
      const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}`);
      this.setState({users:res.data, loading:false})
    }

  searchUsers = async (text) => {
    this.setState({loading: true})
    try {
      const response = await Github.get(`/search/users?q=${text}`)
      const users = response.data.items
      this.setState({users, loading: false})
    } catch (error) {
      this.setState({loading: false})
    }
  } 

  render() {
    return (
      <div className = "App">
       <Navbar />
       <div>
         <Search 
          searchUsers = {this.searchUsers}
          clearSearch = {() => this.setState({users: [], loading:false})}
         />
        <Users 
        loading = {this.state.loading}
        users = {this.state.users}
        />
       </div>

      </div>
    )
  }
}

export default App
