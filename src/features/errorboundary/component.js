import React from 'react';
import PageError from '../error/component';

class ErrorBoundary extends React.Component {
  state = {
    error: false,
    info: null,
  }

  componentDidCatch(error, info) {
    this.setState({
      error: error,
      info: info,
    });
  }

  render() {
    return (
      this.state.error
        ? <PageError errorMessage={this.state.error.toString()} stackTrace={this.state.info.componentStack}/>
        : this.props.children
    )
  }
}

export default ErrorBoundary;
