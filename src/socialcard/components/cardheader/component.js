import React from 'react';

class CardHeader extends React.Component {
  render() {
    const { profile, date, title} = {...this.props}
    return (
      <div>
        <b>{profile.displayName}</b> {" "}<i>{"@" + profile.handle + " - " + date}</i>
        <div className="title">
          {title}
        </div>
      </div>

    )
  }
}

export default CardHeader;
