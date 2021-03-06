import React from "react";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark">
			<div className="container">
				<a className="navbar-brand" href="/">
					Zahraa YH.
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
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/#about_section">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/#projects_section">
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/#experience_section">
								Experience
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/#contact_section">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
