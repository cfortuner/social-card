import React from 'react';
import { ReactionBehaviours } from './components/reactionbehaviour/component';

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
        <input type="image" src={window.location.origin + this.icons[this.props.type]} alt={"reaction"} onClick={this.handleClick()}/>
        {this.props.value}
      </div>
    )
  }

  handleClick = () => {
    // TODO: Implement handle reaction in parent.
    // and implement the reaction component
    this.props.handleReaction(ReactionBehaviours[this.props.type])
  }
}

export default Reaction;
