import React from 'react';
import { Component } from 'react';
import NavBarHeader from './nav';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav} from 'react-bootstrap';


	export default class App extends Component {
		render(){

			return (
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#">BucketList</a>
						</Navbar.Brand>
					</Navbar.Header>
				<Nav>
					<NavItem eventKey={1} href="#">Sign In</NavItem>
					<NavItem eventKey={2} href="#">Sign Up</NavItem>

					<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
						<MenuItem eventKey={3.1}>Action</MenuItem>
						<MenuItem eventKey={3.2}>Another Action</MenuItem>
						<MenuItem eventKey={3.3}>Something Else</MenuItem>
							<MenuItem divider />
						<MenuItem eventKey={3.3}>Separated Link</MenuItem>
					</NavDropdown>
				</Nav>

				</Navbar>

				);

		}
	}