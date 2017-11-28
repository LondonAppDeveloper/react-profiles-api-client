import React from 'react';

import FeedItem from './FeedItem';


const FeedList = (props) => {
  return (
    <div>
      {
        props.items.map((item, i) => {
          return <FeedItem key={i} text={item.status_text} />
        })
      }
    </div>
  )
}

export default FeedList;
