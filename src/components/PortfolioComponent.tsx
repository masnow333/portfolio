import "bootstrap/dist/css/bootstrap.css";
import ImageCardComponent from "./ImageCardComponent";
import { useState } from "react";

function PortfolioComponent() {
	type Project = {
		previewURL: string;
		url: string;
		image: string;
		title: string;
		description: string;
	};

    const [projects, setProjects] = useState<Project[]>([
		{
			previewURL: "https://masnow333.github.io/pokedex/",
			url: "https://github.com/masnow333/pokedex",
			image: "images/pokedex.jpeg",
			title: "Pokedex",
			description:
				"The Pokedex project is a frontend application fetching and displaying information from the Pokedex API",
		},
		{
			previewURL: "https://masnow333.github.io/time-app/",
			url: "https://github.com/masnow333/time-app",
			image: "images/TimeApp.jpeg",
			title: "Time app",
			description: "There's an app that gives you, your current weather data",
		},
		{
			previewURL: "https://masnow333.github.io/Earth-round-three.js/",
			url: "https://github.com/masnow333/Earth-round-three.js",
			image: "images/Earth.jpeg",
			title: "Earth round",
			description: "An animation using Three.js",
		},
		{
			previewURL: "",
			url: "https://github.com/masnow333/face_recognition",
			image: "images/face.jpeg",
			title: "Face recognition",
			description: "A face recognition app.",
		},
		{
			previewURL: "",
			url: "https://github.com/masnow333/algorithms",
			image: "",
			title: "Algoritms",
			description: "There are some examples of basic algorithms.",
		},
		{
			previewURL: "https://masnow333.github.io/write-and-delete/",
			url: "https://github.com/masnow333/write-and-delete",
			image: "images/WriteAndDelete.jpeg",
			title: "Write and delete",
			description: "An animation of a word being written and deleted",
		},
		{
			previewURL: "https://masnow333.github.io/three-in-line/",
			url: "https://github.com/masnow333/three-in-line",
			image: "images/ThreeInLine.jpeg",
			title: "Three in line",
			description: "The popular game three in line",
		},
		{
			previewURL: "",
			url: "https://github.com/masnow333/React-basic-template",
			image: "",
			title: "React basic template",
			description: "A basic template of a web page using react.",
		},
	])
	const comingSoonProject: Project = {
		previewURL: "",
		url: "#",
		image: "images/coming-soon.jpg",
		title: "Coming Soon",
		description: "",
	};

    if (projects.length % 3 != 0) {
        const value = projects.length % 3
        for (let index = 1; index < value; index++) {
            setProjects(oldArray => [...oldArray, comingSoonProject])
        }
    }

	return (
		<section id="portfolio">
			<div className="container mt-3">
				<h1 className="text-center">Portfolio</h1>
				<div className="row">
					{projects.map((project) => {
						return (
							<ImageCardComponent
								title={project.title}
								text={project.description}
								image={project.image}
								repoLink={project.url}
								preview={project.previewURL}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default PortfolioComponent;
