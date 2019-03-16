import React from 'react';
import './styles.scss'

class PageError extends React.Component {
  render() {
    return (
      <div className='page-error'>
        <div className='page-error-message'>
          <h2>Well, this is embarrassing.</h2>
          <i><font color="red">{this.props.errorMessage}</font></i>
        </div>
        <p><iframe src="https://giphy.com/embed/gnJgBlPgHtcnS" width="411" height="480" frameBorder="0" allowFullScreen></iframe></p>
      </div>
    )
  }
}

export default PageError;