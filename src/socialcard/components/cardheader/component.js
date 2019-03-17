import React from 'react'
import './styles.scss'

class CardHeader extends React.Component {
  render() {
    const { profile, date, title} = {...this.props}
    return (
      <div className='social-card-header'>
        <b>{profile.displayName}</b> {" "}<i>{"@" + profile.handle + " - " + date}</i>
        <div className="title">
          {title}
        </div>
      </div>

    )
  }
}

export default CardHeader;
