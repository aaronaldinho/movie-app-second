// import REACT from './Movies'

import Stars from './Stars'

const MoviesList = (props) => {


    return ( 
        <div className='container-movie-list'> 
            {props.movies.map((item, index) => (
                <div  key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.director}</p>
                        <p>{item.duration}</p>
                        <p>{item.genre.join(', ')}</p>
                        <p>{item.year}</p>
                        <div>
                            <Stars rate={item.rate}/>
                        </div>
                </div>
            )
         )};
  
        </div>
    )}
export default MoviesList ;