import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import '../css/shared/feed.css';

const Feed = props => {
  const [data, setData] = useState([]);
  const [showingGifs, setShowingGifs] = useState([]);
  let myHistory = useHistory();
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

    //console.log(props.searchValue);
  }, []);

  // useEffect(() => {
  //   setSearchingTerm(props.searchValue);

  //   console.log(props.searchValue);

  //   if (props.searchValue !== '') {
  //     props.history.push('/about');
  //   }

  //   props.updateSearchTerm('');
  //   console.log(props.searchValue);
  // }, [props.searchValue]);

  // useEffect(() => {
  //   fetch(
  //     'http://api.giphy.com/v1/gifs/search?q=happy-holidays-hannukah-dreidel-SbtVCNkduYZkiRGl7R&api_key=pOIRajs5VujoMyGvrMyB7uNXcFtFyt6n'
  //   )
  //     .then(res => res.json())
  //     .then(res => console.log(res.data));
  // });

  // useEffect(() => {
  //   // fetch('http://api.giphy.com/v1/gifs/');
  //   fetch(
  //     `http://api.giphy.com/v1/gifs?ids=cnj6QOFSpswsyucHvY,4QFzDm90VamaEBDj4p&api_key=pOIRajs5VujoMyGvrMyB7uNXcFtFyt6n`
  //   )
  //     .then(res => res.json())
  //     .then(response => console.log(response.data));
  // });
  // useEffect(() => {
  //   fetch(
  //     `http://api.giphy.com/v1/gifs/cnj6QOFSpswsyucHvY?api_key=pOIRajs5VujoMyGvrMyB7uNXcFtFyt6n/related`
  //   )
  //     .then(res => res.json())
  //     .then(response => console.log(response.data));
  // }, []);

  const listItems = data.map(item => (
    <div key={item.id} className='gif-card'>
      <img
        src={item.images.fixed_height.url}
        onClick={() => myHistory.push('/testing')}
        alt='pic'
        className='gif-card-img'
      />
    </div>
  ));

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
};

// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');

//   return await res.json();
//   //console.log(myJson);
//   // const user = await fetch('https://jsonplaceholder.typicode.com/users')
// };
// function showDetailView(itemKey) {
//   fetch();
// }
export default Feed;

// api.giphy.com/v1/gifs/trending

//'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=pOIRajs5VujoMyGvrMyB7uNXcFtFyt6n&limit=5'

// <iframe
// src='https://giphy.com/embed/2YmyLa9YZIIhBCpYTo'
// width='500px'
// height='500px'
// // style={{ position: 'absolute' }}
// frameBorder='0'
// className='giphy-embed'
// allowFullScreen></iframe>
// <img src={item.embed_url} alt='pic' width='200px' />
// </div>
