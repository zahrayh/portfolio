import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectsSection() {
	return (
		<div id="projects_section">
			<div className="container section">
				<h1>Projects</h1>
				<div className="row align-items-center mt-4">
					<div className="col">
						<ProjectItem />
					</div>
					<div className="col">
						<ProjectItem />
					</div>
					<div className="col">
						<ProjectItem />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectsSection;
