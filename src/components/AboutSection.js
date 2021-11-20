import React from "react";
import img from "../images/about.svg";

function AboutSection() {
	return (
		<div className="container about_section" id="about_section">
			<div className="row py-5 align-items-center">
				<div className="col">
					<img
						src={img}
						alt="about me section"
						className="img-fluid"
						width="450"
					/>
				</div>
				<div className="col">
					<h1 className="mb-3">About Me</h1>
					<p>
						I've found my passion for web development during my computer science
						studies. During my work experience, I've managed multiple websites
						using WordPress and developed projects to solve problems using PHP
						and Laravel Framework. I'm looking forward to bringing that passion
						into a remote job that focuses on these technologies.
					</p>
					<h2 className="mt-5 mb-3">Skills</h2>
					<div className="row">
						<div className="col">
							<div className="mb-2">
								<label htmlFor="">HTML</label>
								<div class="progress">
									<div
										class="progress-bar"
										role="progressbar"
										aria-valuenow="100"
										aria-valuemin="0"
										aria-valuemax="100"
										style={{ width: "100%" }}
									>
										100%
									</div>
								</div>
							</div>
							<div className="mb-2">
								<label htmlFor="">CSS</label>
								<div class="progress">
									<div
										class="progress-bar"
										role="progressbar"
										aria-valuenow="100"
										aria-valuemin="0"
										aria-valuemax="100"
										style={{ width: "100%" }}
									>
										100%
									</div>
								</div>
							</div>
							<div className="mb-2">
								<label htmlFor="">JavaScript</label>
								<div class="progress">
									<div
										class="progress-bar"
										role="progressbar"
										aria-valuenow="95"
										aria-valuemin="0"
										aria-valuemax="100"
										style={{ width: "95%" }}
									>
										95%
									</div>
								</div>
							</div>
							<div className="mb-2">
								<label htmlFor="">React</label>
								<div class="progress">
									<div
										class="progress-bar"
										role="progressbar"
										aria-valuenow="80"
										aria-valuemin="0"
										aria-valuemax="100"
										style={{ width: "80%" }}
									>
										80%
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="mb-2">
								<label htmlFor="">WordPress</label>
								<div class="progress">
									<div
										class="progress-bar"
										role="progressbar"
										aria-valuenow="100"
										aria-valuemin="0"
										aria-valuemax="100"
										style={{ width: "100%" }}
									>
										100%
									</div>
								</div>
							</div>
							<div className="mb-2">
								<label htmlFor="">PHP</label>
								<div class="progress">
									<div
										class="progress-bar"
										role="progressbar"
										aria-valuenow="80"
										aria-valuemin="0"
										aria-valuemax="100"
										style={{ width: "80%" }}
									>
										80%
									</div>
								</div>
							</div>
							<div className="mb-2">
								<label htmlFor="">Laravel</label>
								<div class="progress">
									<div
										class="progress-bar"
										role="progressbar"
										aria-valuenow="80"
										aria-valuemin="0"
										aria-valuemax="100"
										style={{ width: "80%" }}
									>
										80%
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutSection;
