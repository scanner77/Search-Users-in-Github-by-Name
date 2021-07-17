import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    state = {
        text: ''
    }
     handleChange = (event) => { 
         this.setState({[event.target.name]: event.target.value})
         
     }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.findUser(this.state.text);
        this.setState({ text: '' })
     }
     static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearSearch: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
      }
    render() {

        const {showClear, clearSearch} = this.props;
        return (
            <div>
                <form className = "form" onSubmit = {this.handleSubmit}>
                <input type="text" placeholder= "SearcH Users" name = "text" onChange = {this.handleChange}/>
                <input type="submit" value="Search" className = "btn btn-dark btn-block" />
                </form>
                <br/>
                {showClear &&
                <button onClick = {clearSearch} className = "btn btn-dark btn-block" style ={{width: '500px'}}>Clear Search</button>
                }
            </div>
        )
    }
}                                                                                                   

export default Search
