import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavComponent = () => {
	const [darkScroll, setDarkScroll] = useState(false);
	window.onscroll = function () {
		const top = window.scrollY;
		if (top >= 100) {
			setDarkScroll(true);
		} else {
			setDarkScroll(false);
		}
	};

	return (
		<Navbar
			expand='lg'
			className={`navbar navbar-expand-lg fixed-top navbar-dark navbarScroll ${
				darkScroll ? 'navbarDark' : ''
			}`}
		>
			<Container>
				<Navbar.Brand href='#home'>Jonathan</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav d-flex'>
					<Nav className='ms-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#about'>About</Nav.Link>
						<Nav.Link href='#services'>Services</Nav.Link>
						<Nav.Link href='#portfolio'>Portfolio</Nav.Link>
						<Nav.Link href='#contact'>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavComponent;
