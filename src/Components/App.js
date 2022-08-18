import React from 'react'
import SearchInput from './SearchInput'
import axios from 'axios'
import ImageList from './ImageList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import About from './About'
import Navbar from './NavBar'

class App extends React.Component {

constructor(props){
    super(props)
    this.state = {image: []}
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
}

async onSearchSubmit(entry){
    const response = await axios.get(`https://pixabay.com/api/?key=29172219-8b9488b3415c923f96261a906&q=${entry}&image_type=photo&pretty=true`)
    console.log(response.data.hits)
    this.setState({images:response.date.hits})
}

render(){
    return(
        <div>
            <Navbar />
            <BrowserRouter>
        <Routes>
        <Route path='/' element={Home}/>
        <Route path='/About' element={About}/>
        <Route path='/Contact' element={Contact}/>
        </Routes>
        </BrowserRouter>
    <div className='ui container' style={{marginTop:'40px'}}>
    <SearchInput onSearchSubmit={this.onSearchSubmit}/>
    <ImageList images={this.state.images}/>
    </div>
    </div>
)
}
}

export default App;