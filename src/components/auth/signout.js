import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentWillMount(){
    this.props.signoutUser();
  }
  
  render(){
    return <div>
        <h3>May the road rise up to meet you.</h3>
        <h3>May the wind be always at your back.</h3>
        <h3>May the sun shine warm upon your face and</h3>
        <h3>the rains fall soft upon your fields, until we meet again...</h3>
        <p></p>
          <h6>-traditional gaelic blessing</h6>

           </div>
  }
}

export default connect(null, actions)(Signout);