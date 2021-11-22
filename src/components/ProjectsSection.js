import React from "react";
import ProjectItem from "./ProjectItem";
import shoppies from "../images/projects/the_shoppies.png";
import todo from "../images/projects/todo.svg";
import jobie from "../images/projects/jobie.png";

const projectItems = [
	{
		img: todo,
		title: "Todo App",
		details:
			"A todo-list app developed with react js and firestore as database. This app has the following features: adding new todo item, delete item , set item as done.",
		technologies: ["react", "firestore", "bootstrap"],
		preview_link: "https://codesandbox.io/s/firebase-todo-list-app-31dws",
		git_link: "https://github.com/zahrayh/firestore-project/tree/main/",
	},
	{
		img: shoppies,
		title: "Movie Nomination",
		details:
			"A webpage that can search OMDB for movies, and allow the user to save their favorite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.",
		technologies: ["react", "api", "bootstrap"],
		preview_link:
			"https://codesandbox.io/s/github/zahrayh/the_shoppies_movie_nomination/tree/main/",
		git_link: "https://github.com/zahrayh/the_shoppies_movie_nomination",
	},
	{
		img: jobie,
		title: "Jobie",
		details:
			"A website where people can look for jobs and apply for them. In addition, employers and companies can post jobs. The website is for tech related jobs only.",
		technologies: ["next js", "firebase", "tailwind css"],
		preview_link: "https://rbc-jobie.netlify.app/",
		git_link: "https://github.com/Iraq-RBC-Capstones-2021/capstone-react-jobie",
	},
];

function ProjectsSection() {
	return (
		<div id="projects_section">
			<div className="container section">
				<h1>Projects</h1>
				<div className="row mt-4">
					{projectItems.map((item, index) => {
						return (
							<div className="col d-flex" key={index}>
								<ProjectItem item={item} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default ProjectsSection;
