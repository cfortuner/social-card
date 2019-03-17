import React from 'react'
import CardContent from './components/cardcontent/component'
import CardHeader from './components/cardheader/component'
import Reaction from '../features/reaction/component'
import _ from 'lodash'

class SocialCard extends React.Component {
  render() {
    const data = {...this.props.data}

    const hasData = data && data.profile && data.card
    const hasReactions = data && data.reactions && data.reactions.length > 0

    if (!hasData) throw new Error('Social Card data missing from props.')

    return (
      <>
        <CardHeader className='social-card-header' profile={data.profile} card={data.card}/>
        <CardContent className='social-card-content' media={data}/>
        {hasReactions &&
          <div className='social-card-reactions'>
            {_.map(data.reactions, (reaction) =>
              <li key={reaction.type}>
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