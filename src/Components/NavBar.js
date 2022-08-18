import React from "react";

const Navbar =() =>{
        return (
            <div>
                <nav className='ui raisedvery padded segment'>
            <a className= 'ui teal inverted segment'> Image search engine</a>
            <div className= 'ui right floated header'>
                <button className='ui button'><a href="/Home">Home</a></button>
                <button className='ui button'><a href="/About">About</a></button>
                <button className='ui button'><a href="/Contact">Contact</a></button>
            </div>
            </nav>
            </div>
    )
}

export default Navbar
