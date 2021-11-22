import React from "react";
import ExperienceItem from "./ExperienceItem";

const experienceItems = [
	{
		title: "Website Manager",
		details:
			"Technical support in the website unit of University of Kerbala. I've helped to stabilize the websites in the university by researching and solving issues that arise. Provided and implemented automated solutions to problems in order to remove the error-prone manual process. \n Manager of the website of Islamic College in University of Kerbala.Redesigned the whole website with a more modern and user-friendly design, in addition to connecting it with Facebook. This has increased the unique page views by more than 85% based on Google Analytics data.",
		company: "University of Kerbala",
		date: "September 2018 - Present",
	},
	{
		title: "React Web Development Bootcamp",
		details:
			"Immersive 4-month-long boot camp course, with over 54 hours of training classes and 26 assignments submitted.Tchnologies: HTML, CSS, Tailwind, Bootstrap, React JS, Next JS, Figma, JavaScript, Firebase,GitAdditional course work on teamwork, time management, business communication, agile product management",
		company: "Re:Coded",
		date: "July 2021 - November 2021",
	},
];

function ExperienceSection() {
	return (
		<div id="experience_section">
			<div className="container section">
				<h1>Experience</h1>
				<div className="mt-4">
					{experienceItems.map((item, index) => {
						return <ExperienceItem item={item} key={index} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default ExperienceSection;
