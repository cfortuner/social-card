import React from 'react';

class CardHeader extends React.Component {
  render() {
    const { profileName, profileHandle, date, title } = {...this.props}
    return (
      <div>
        <b>colin</b> {" "}<i>{"@" + profileHandle + " - " + date}</i>
        <div className="title">
          {title}
        </div>
      </div>

    )
  }
}

export default CardHeader;
