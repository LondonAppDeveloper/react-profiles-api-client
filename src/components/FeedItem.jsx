import React from 'react';

import { Card } from 'semantic-ui-react';


const FeedItem = (props) => {
  return (
    <Card>
      <Card.Content>
        {props.text}
      </Card.Content>
    </Card>
  )
}

export default FeedItem;
