// import React from 'react';
///Stars
//  import Star0 from './stars/star_empty.svg'
 import Star1 from './stars/star_half.svg'
import Star2 from './stars/star_full.svg'
//movies
// import MovieList from './Movies'

const Stars = (props) => {

    // const hasHalfStar = (props.rating % 1 !== 0);
    // const rating = parseInt(props.rating);

    let level = [];

    for(let i=0; i<props.rate; i++){
        level.push(<img key={i} src={Star2} className='star-level' alt='estrella'/>)
    }
    for(let i=props.rate; i<=10; i++){

        level.push(<img key={i+props.rate} src={Star1} className='star-level' alt=''/>)
    } 
    // let star = Star2;

    // if (i === rating && hasHalfStar) {
    //     level = Star1;    
    // } else if (i > rating - 1) {
    //     level = Star0;
    // }

    // stars.push(<img alt="" key={i} src={star} />)


    return (
        <div>
            {level.map(item=>item)}
        </div>
     );
    }
 
export default Stars;
