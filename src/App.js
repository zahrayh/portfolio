import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import hero from "./images/hero.png";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import { Helmet } from "react-helmet";

function App() {
	return (
		<div>
			<header
				className="vh-100 bg-dark"
				style={{
					background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),url(${hero})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<Helmet>
					<title>Zahraa YH</title>
				</Helmet>
				<Navbar />
				<div className="container">
					<HeroSection />
				</div>
			</header>
			<AboutSection />
			<ProjectsSection />
			<ExperienceSection />
		</div>
	);
}

export default App;
