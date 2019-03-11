import React from 'react';
import CardContent from './components/cardcontent/component';
import CardHeader from './components/cardheader/component';
import Reaction from '../features/reaction/component';

class SocialCard extends React.Component {
  render() {
    return (
      <div>
        <CardHeader/>
        <CardContent/>
        <div className='social-card-reactions'>
          <Reaction></Reaction>
        </div>
      </div>

    )
  }
}

export default SocialCard;
