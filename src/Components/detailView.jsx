import React, { useState, useEffect } from 'react';
import '../css/shared/feed.css';
import '../css/shared/detail.css';

const Detail = props => {
  const { id } = props.match.params;
  const [giflink, setGifLink] = useState('');
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs?ids=${id}&api_key=pOIRajs5VujoMyGvrMyB7uNXcFtFyt6n`
    )
      .then(res => res.json())
      .then(response => {
        console.log(response.data[0].images);

        setGifLink(response.data[0].images['downsized'].url);
      });
  }, []);

  return (
    <main className='main-feed-content'>
      <div className='detail-wrap'>
        <img src={giflink} alt='pic' className='detail-card-img' />
      </div>
    </main>
  );
};

export default Detail;
