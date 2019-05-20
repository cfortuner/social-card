import React from 'react'
import './styles.scss'

class CardHeader extends React.Component {
  render() {
    const { profile, date, title} = {...this.props}
    return profile && profile.displayName && profile.handle && (
      <div className='social-card-header'>
        <img alt="header" src={window.location.origin + '/img/header-image.jpeg'}></img>
        <div className='social-card-header-body'>
          <b>{profile.displayName}</b> {" "}<i>{"@" + profile.handle + " - " + date}</i>
          <div className="title">
            {title}
          </div>
        </div>
      </div>

    )
  }
}

export default CardHeader;
