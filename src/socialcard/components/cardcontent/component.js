import React from 'react'
import './styles.scss'

class CardContent extends React.Component {
  render() {
    return (
      <div className='social-card-content'>
        <img src={window.location.origin + this.props.card.media} alt='Card Media'/>
        <div className='social-card-content-body'>
          <h3>{this.props.card.title}</h3>
          <p>{this.props.card.message}</p>
          <p><i style={{color:'grey'}}>{this.props.card.link}</i></p>
        </div>
      </div>
    )
  }
}

export default CardContent;
