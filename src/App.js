import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}){
  //console.log(props);
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://m.jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg',
    rating: 5.0
  },
  {
    id: 2,
    name: 'Ramen',
    image: 'https://img.hankyung.com/photo/201902/AA.18901823.1.jpg',
    rating: 3.8
  },
  {
    id: 3,
    name: 'Kimbap',
    image: 'https://craftlog.com/m/i/5805364=s1280=h960',
    rating: 4.9
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

export default App;
