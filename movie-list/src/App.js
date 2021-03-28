
import './App.css';
import React from 'react'

//components
import Header from './components/Header.js'

import MoviesList from './components/MoviesList'
import movies from './components/moviesData'

// import Training from './components/training_.js'

import products from './components/trainingdata.js';
// import ButtonSort from './components/Button-Sort.js'
//
class App extends React.Component{

  state ={
    MoviesList:[],
    // Training : []
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
    }
    orderMoviesAlpha(e) {
        const orderAlpha = e.target.value;
    
        if (orderAlpha === 'A-Z') {
          this.setState({
            MoviesList: movies.sort((y, z) => z.title - y.title)
          })
        }
        if (orderAlpha === 'Z-A') {
          this.setState({
            MoviesList: movies.sort((y, z) => y.title - z.title)
          })
        }
    }

  //   orderMoviesAlpha(e) {
  //     const orderAlpha = e.target.value;
  
  //     if (orderAlpha === 'A-Z') {
  //       this.setState({
  //         training: products.sort((y, z) => z.names - y.names)
  //       })
  //     }
  //     if (orderAlpha === 'Z-A') {
  //       this.setState({
  //         training: products.sort((y, z) => y.names - z.names)
  //       })
  //     }
  // }
    render(){
      // console.log(this.state.orderMoviesAlpha())
      return(
        <div className='App'>
          
          <Header/>
          <div className='div-buttons'>
            <button onClick={e=> this.fetch(e)}> fetch all Films!</button>
            <button  onClick={e=> this.reset(e)}> DELETE ALL FILMS</button>
            <button value='newest' onClick={e => this.orderMovies(e)} name="" id="">Newest</button>
            <button value='oldest' onClick={e => this.orderMovies(e)} name="" id="">Sort by: OLDEST</button>

             <button value="A-Z" onClick={e => this.orderMoviesAlpha(e)}>Sort by A-Z</button>
      {/* </select> */}
              <button value='Z-A' onClick={e => this.orderMoviesAlpha(e)} name="" id="" >Sort by: Z-A</button>
            </div>
          {/* <ButtonSort/> */}
          
          <MoviesList movies={this.state.MoviesList}/>
          {/* <Training try={this.state.Training}/> */}
        </div>
      )
    }
}

export default App;


