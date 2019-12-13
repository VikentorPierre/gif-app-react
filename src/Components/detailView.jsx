import React, { useState, useEffect } from 'react';
import '../css/shared/feed.css';
import '../css/shared/detail.css';

const Detail = props => {
  const { id } = props.match.params;
  const [giflink, setGifLink] = useState('');
  useEffect(() => {
    fetch(
      `http://api.giphy.com/v1/gifs?ids=${id}&api_key=pOIRajs5VujoMyGvrMyB7uNXcFtFyt6n`
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
        <img
          src={giflink}
          //   src={item.images.fixed_height.url}
          alt='pic'
          className='detail-card-img'
        />
      </div>
      {/* <h2> {console.log(props.match.params.id)}</h2> */}
    </main>
  );
};

export default Detail;
