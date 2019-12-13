import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../css/shared/feed.css';

const Search = props => {
  let { id } = useParams();
  const [resultList, setResultList] = useState([]);
  const styleh1 = {
    marginBottom: '2em',
    marginTop: '1em',
    color: 'white'
  };

  useEffect(() => {
    console.log(
      'http://api.giphy.com/v1/gifs/search?q=' +
        id +
        '&api_key=pOIRajs5VujoMyGvrMyB7uNXcFtFyt6n'
    );

    fetch(
      'http://api.giphy.com/v1/gifs/search?q=' +
        id +
        '&api_key=pOIRajs5VujoMyGvrMyB7uNXcFtFyt6n&limit=30'
    )
      .then(res => res.json())
      .then(response => response.data)
      .then(data => {
        setResultList(data);
        console.log(data);
      });
  }, [id]);

  const resultCards = resultList.map(item => (
    <div
      key={item.id}
      className='gif-card'
      onClick={() => console.log(item.id)}>
      <Link to={`/detail/${item.id}`}>
        <img
          src={item.images.fixed_height.url}
          alt='pic'
          className='gif-card-img'
        />
      </Link>
    </div>
  ));
  return (
    <main className='main-feed-content'>
      <h1 style={styleh1}> Results </h1>
      <article className='main-gifs-cards'>{resultCards}</article>
    </main>
  );
};

export default Search;
