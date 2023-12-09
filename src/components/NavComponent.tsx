import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
const NavComponent = () => {
	const [darkScroll, setDarkScroll] = useState(false);
	const header = document.querySelector(".navbar-dark");
	console.log(header);
	window.onscroll = function () {
		const top = window.scrollY;
		if (top >= 100) {
			setDarkScroll(true);
		} else {
			setDarkScroll(false);
		}
	};

	return (
		<nav
			className={`navbar navbar-expand-lg fixed-top navbar-dark navbarScroll ${
				darkScroll ? "navbarDark" : ""
			}`}
		>
			<div className="container">
				<a className="navbar-brand" href="#">
					Jonathan
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#home">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#about">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#services">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#portfolio">
								Portfolio
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavComponent;
