import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class NavBarHeader extends Component {
	renderLinks(){
		if(this.props.authenticated){
			return <NavItem href="/signout">Sign Out</NavItem>
		}else{
			return [
			  <NavItem key={1} href="/signin">Sign In</NavItem>,
		      <NavItem key={2} href="/signup">Sign Up</NavItem>
			];
		}
	}

	render() {
		return (
			<Navbar>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="#">eXamen</a>
		      </Navbar.Brand>
		    </Navbar.Header>
		    <Nav>
		      {this.renderLinks()}
		      <NavDropdown key={3} title="more mindfulness" id="basic-nav-dropdown">
		        <MenuItem key={3.1} href="http://www.catholicfamilyfaith.com/2015/09/weekly-examen.html" target="_blank">Weekly Family Examen</MenuItem>
		        <MenuItem key={3.2} href="http://www.faith5.org/" target="_blank">Faith 5 for Families</MenuItem>
		        <MenuItem key={3.3} href="http://www.ignatianspirituality.com/24449/take-lord-receive-work-career-suscipe" target="_blank">Work & Career</MenuItem>
		        <MenuItem key={3.4} href="http://www.ignatianspirituality.com/24672/the-money-examen" target="_blank">Money Examen </MenuItem>
		        <MenuItem divider />
		        <MenuItem key={3.5} href="http://www.ignatianspirituality.com/ignatian-prayer/the-examen" target="_blank">About Examen</MenuItem>
		      </NavDropdown>
		    </Nav>
		  </Navbar>
		);
	}
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(NavBarHeader);

