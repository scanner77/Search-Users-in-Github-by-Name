import React from 'react'
import PropTypes from 'prop-types';

const UserItem = ({user: {login, avatar_url, html_url}})=> {
    // const  {login, avatar_url, html_url} = props.user;

    return (
        <div className = "card text-center">
             <img 
             src = {avatar_url} 
             alt = {login} 
             style = {{width: '60px'}}/>
               <br/>
               <h1>{login}</h1>
                <br/>
                <a href = {html_url}>More</a>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}


export default UserItem
