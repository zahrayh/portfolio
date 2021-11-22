import React from "react";

function ExperienceItem({ item }) {
	return (
		<div className="experience_item">
			<div className="d-flex">
				<h2>{item.title}</h2>
				<p className="ms-auto">{item.date}</p>
			</div>
			<p className="company_name">
				<strong>{item.company}</strong>
			</p>

			{item.details.split("\n").map((str) => (
				<p className="details">{str}</p>
			))}
		</div>
	);
}

export default ExperienceItem;
