import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../css/shared/feed.css';

const Feed = props => {
  const [data, setData] = useState([]);
  const [showingGifs, setShowingGifs] = useState([]);

  // we fetch the 5 top trending gif and load similar gifs
  useEffect(() => {
    fetch(
      'http://api.giphy.com/v1/gifs/trending?api_key=pOIRajs5VujoMyGvrMyB7uNXcFtFyt6n&limit=5'
    )
      .then(res => res.json())
      .then(response => {
        setData(response.data);
        return response.data[0].slug;
      })
      .then(dat => {
        fetch(
          `http://api.giphy.com/v1/gifs/search?q=${dat}&api_key=pOIRajs5VujoMyGvrMyB7uNXcFtFyt6n`
        )
          .then(res => res.json())
          .then(response => setShowingGifs(response.data));
      });
  }, []);

  // the 5 trending gifs
  const listItems = data.map(item => (
    <div key={item.id} className='gif-card'>
      <img
        src={item.images.fixed_height.url}
        onClick={() => getAllGifs(item.slug)}
        alt='pic'
        className='gif-card-img'
      />
    </div>
  ));
  // related gifs from the 5 top trending gifs
  const gifsShowing = showingGifs.map(item => (
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
      <section className='select-picker-sec'>
        <header className='select-picker-sec_header'>
          <h1>Trending GIFs</h1>
          <div className='trend-gif-wrap'>{listItems}</div>
        </header>
      </section>
      <section className='meme-sec'>
        <h1>Search GIFs</h1>
        <article className='main-gifs-cards'>{gifsShowing}</article>
      </section>
    </main>
  );

  // this function is run when we lick one of the 5 trending gifs, then it load the rest of the related gifs
  function getAllGifs(gifurl) {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${gifurl}&api_key=pOIRajs5VujoMyGvrMyB7uNXcFtFyt6n`
    )
      .then(res => res.json())
      .then(response => setShowingGifs(response.data));
  }
};
export default Feed;
