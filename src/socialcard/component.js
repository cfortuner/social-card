import React from 'react'
import CardContent from './components/cardcontent/component'
import CardHeader from './components/cardheader/component'
import Reaction from '../features/reaction/component'
import PageError from '../features/error/component'
import _ from 'lodash'

class SocialCard extends React.Component {
  render() {
    const data = {...this.props.data}

    const isDataValid = data && data.profile && data.card
    const hasReactions = data && data.reactions && data.reactions.length > 0 
    return (
      isDataValid 
        ? <PageError errorMessage="Data invalid. Missing card information."/>
        : <>
          {isDataValid && 
            <CardHeader className='social-card-header' profile={data.profile} title={data.card.title}/>}
            <CardContent className='social-card-content' media={data}/>
            {hasReactions && 
              <div className='social-card-reactions'>
                {_.map(data.reactions, (reaction) =>
                  <li >
                    <Reaction type={reaction.type} value={reaction.value}/>
                  </li>
                )}
              </div>
            }
          </>
    )
  }
}

export default SocialCard