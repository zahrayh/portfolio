import React from "react";

function HeroSection() {
	return (
		<div className="hero_section">
			<h1 className="text-light">Full Stack Developer</h1>
			<p className="text-lights mt-4">
				Hi, I'm Zahraa YH. <br />A full stack web developer in PHP and React
				front end developer.
			</p>
			<div className="mt-4">
				<button className="btn btn-lg rounded-pill btn_custom me-3 ">
					Projects
				</button>
				<button className="btn btn-lg rounded-pill btn_outline_custom ">
					Resume
				</button>
			</div>
		</div>
	);
}

export default HeroSection;
