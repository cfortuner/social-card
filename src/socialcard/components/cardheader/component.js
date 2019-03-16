import React from 'react';

class CardHeader extends React.Component {
  render() {
    const { profile, card} = {...this.props}
    return (
      <div>
        <b>{profile.displayName}</b> {" "}<i>{"@" + profile.handle + " - " + card.date}</i>
        <div className="title">
          {card.title}
        </div>
      </div>

    )
  }
}

export default CardHeader;
