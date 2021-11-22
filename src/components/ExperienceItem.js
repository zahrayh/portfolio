import React from "react";

function ExperienceItem({ item }) {
	return (
		<div className="experience_item">
			<div className="row align-items-center">
				<div className="col-3 text-center">
					<img src={item.img} alt={item.title} className="img-fluid" />
				</div>
				<div className="col">
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
			</div>
		</div>
	);
}

export default ExperienceItem;
