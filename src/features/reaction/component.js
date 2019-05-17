import React from 'react';

class Reaction extends React.Component {

  icons = {
    "comments": "/img/comments-icon.png",
    "reshares": "/img/reshares-icon.png",
    "loves": "/img/loves-icon.png",
    "email": "/img/email-icon.png",
  }

  render() {
    return (
      <div>
        <img src={window.location.origin + this.icons[this.props.type]} alt={"reaction"}/>
        {this.props.value}
      </div>
    )
  }


}

export default Reaction;
