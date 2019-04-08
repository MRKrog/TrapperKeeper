import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ErrorPop extends Component {
  render() {
    return (
      <div className='error-pop-container'>
        <h1>{this.props.error}</h1>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  error: state.error
});

export default connect(mapStateToProps)(ErrorPop);