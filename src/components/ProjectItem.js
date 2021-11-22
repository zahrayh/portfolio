import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function ProjectItem({ item }) {
	console.log(item);
	return (
		<div className="card">
			<img src={item.img} className="card-img-top" alt={item.title} />
			<div className="card-body d-flex flex-column">
				<h5 className="card-title">{item.title}</h5>
				<div className="skills">
					{item.technologies.map((tech) => {
						return <span className="badge bg_custom_accent me-1">{tech}</span>;
					})}
				</div>

				<p className="card-text mt-3 mb-3">{item.details}</p>

				<div className="mt-auto d-flex">
					<a
						href={item.preview_link}
						className="btn btn-sm btn_custom_dark me-2"
						target="_blank"
						rel="noopener noreferrer"
						ssss
					>
						<FaEye className="me-1 pb-1" size={17} />
						Preview
					</a>
					<a
						href={item.git_link}
						className="btn btn-sm btn_custom_dark"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub className="me-1 pb-1" size={19} />
						GitHub
					</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectItem;
