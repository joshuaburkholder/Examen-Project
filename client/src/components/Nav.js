import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-redux';

	class NavBarHeader extends Component {
		renderLinks(){
			if(this.props.authenticated){
				return <NavItem href="#">Sign Out</NavItem>
			}else{
				return [
					<NavItem key={1} href="#">Sign In</NavItem>,
					<NavItem key={2} href="#">Sign Up</NavItem>
				];
			}
		}

		render() {
			return (
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#">BucketList</a>
						</Navbar.Brand>
					</Navbar.Header>
				  <Nav>
					{this.renderLinks()}
					<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
						<MenuItem eventKey={3.1}>Action</MenuItem>
						<MenuItem eventKey={3.2}>Another Action</MenuItem>
						<MenuItem eventKey={3.3}>Something Else</MenuItem>
							<MenuItem divider />
						<MenuItem eventKey={3.3} href="/newlist">Separated Link</MenuItem>
					</NavDropdown>
				  </Nav>
				</Navbar>
				);
		}	
	}

function mapStateToProps(state){
	return{
		authenticated: state.auth.authenticated
	};
}


	export default connect(mapStateToProps)(NavBarHeader);