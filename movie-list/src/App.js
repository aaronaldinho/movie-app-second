
import './App.css';
import React from 'react'

//components
import Header from './components/Header.js'
import MoviesList from './components/MoviesList'
import movies from './components/moviesData'
// import ButtonsSort from'./components/Button-Sort'
//
class App extends React.Component{

  state ={
    MoviesList:[]
  }

    reset(){
        this.setState({
            MoviesList:[]
          })
        }

    
    fetch(){
        this.setState({
            MoviesList: movies
        })
    }


    orderMovies(e) {

      const orderYear = e.target.value;
      const orderAlpha = e.target.value;
  
      if (orderYear === 'oldest') {
        this.setState({
          MoviesList: movies.sort((a, b) => a.year - b.year)
        })
      }
  
      if (orderYear === 'newest') {
        this.setState({
          MoviesList: movies.sort((a, b) => b.year - a.year)
        })
      }
      if (orderAlpha === 'A-Z') {
        this.setState({
          MoviesList: movies.sort((a, b) => b.title - a.title)
        })
      }
      if (orderAlpha === 'Z-A') {
        this.setState({
          MoviesList: movies.sort((a, b) => b.title - a.title)
        })
      }
  
    }
    render(){
      return(
        <div className='App'>
          
          <Header/>
          <div className='div-buttons'>
          <button onClick={e=> this.fetch()}> fetch all Films!</button>
          <button onClick={e=> this.reset()}> DELETE ALL FILMS</button>
          <select onChange={e => this.orderMovies(e)} name="" id="">
            <option value="">-choose</option>
            <option value="newest">NEWEST</option>
            <option value="oldest">oldest</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
        </select>
          </div>
          <MoviesList movies={this.state.MoviesList}/>
        </div>
      )
    }

}

export default App;


