import React from 'react'
import CardContent from './components/cardcontent/component'
import CardHeader from './components/cardheader/component'
import Reaction from '../features/reaction/component'
import './styles.scss'
import _ from 'lodash'

class SocialCard extends React.Component {
  render() {
    const data = {...this.props.data}

    const hasData = data && data.profile && data.card
    const hasReactions = data && data.reactions && data.reactions.length > 0

    if (!hasData) throw new Error('Social Card data missing from props.')

    return (
      <div className='social-card'>
        <CardHeader profile={data.profile} date={data.card.date} title={data.card.title}/>
        <CardContent card={data.card} />
        {hasReactions &&
          <div className='social-card-reactions'>
            {_.map(data.reactions, (reaction) =>
              <li key={reaction.type}>
                <Reaction type={reaction.type} value={reaction.value}/>
              </li>
            )}
          </div>
        }
      </div>
    )
  }
}

export default SocialCard