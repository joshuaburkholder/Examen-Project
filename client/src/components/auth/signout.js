import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
	componentWillMount(){
		this.props.signoutUser();
	}
	
	render(){
		return <div>
				<p>May the road rise up to meet you.</p>
				<p>May the wind be always at your back.</p>
				<p>May the sun shine warm upon your face;</p>
				<p>the rains fall soft upon your fields and until we meet again,</p>
				<p>may God hold you in the palm of His hand.</p>
					<h6>traditional gaelic blessing</h6>

  			   </div>
	}
}

export default connect(null, actions)(Signout);