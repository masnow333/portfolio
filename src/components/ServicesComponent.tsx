import "bootstrap/dist/css/bootstrap.css";
import CardComponnent from "./CardComponnent";
import { IconDefinition, faApple, faChrome } from "@fortawesome/free-brands-svg-icons";
import { faCode, faLayerGroup, faMobileAlt, faSearch } from "@fortawesome/free-solid-svg-icons";

function ServicesComponent() {
	type Services = {
		title: string;
		description: string;
		icon: IconDefinition;
	};
	const services: Services[] = [
		{
			title: "iOS App Development",
			description:
				"Transform your ideas into sleek and intuitive iOS applications with our expert development team. We specialize in creating seamless, user-friendly experiences that leverage the full potential of Apple's ecosystem.",
			icon: faApple,
		},
		{
			title: "Hybrid Mobile App Development",
			description:
				"Seamlessly reach audiences across platforms with our hybrid mobile app development services. We create efficient and cost-effective applications that run smoothly on both iOS and Android devices, providing a unified experience for your users.",
			icon: faMobileAlt,
		},
		{
			title: "Website Development",
			description:
				"From concept to execution, our website development services focus on crafting visually appealing and functionally robust websites. Whether you need a static site or a dynamic web application, we have the expertise to bring your vision to life.",
			icon: faChrome,
		},
		{
			title: "Custom Software Integration",
			description:
				"Streamline your operations by integrating custom software solutions tailored to your specific needs. Our integration services enhance efficiency, collaboration, and data management within your organization.",
			icon: faCode,
		},
		{
			title: "SEO (Search Engine Optimization)",
			description:
				"Enhance your online visibility and drive targeted traffic to your website with our SEO services. Our strategies focus on optimizing your content, improving website ranking, and increasing overall online presence, ensuring that your business stands out in search engine results.",
			icon: faSearch,
		},
		{
			title: "Mobile Responsive Design",
			description:
				"Ensure a seamless user experience across various devices with our mobile-responsive design services. We create visually appealing and functional websites that adapt to different screen sizes, providing a consistent experience for your audience.",
			icon: faLayerGroup,
		},
	];
	return (
		<section id="services" className="min-vh-100">
			<div className="container">
				<h1 className="text-center">Services</h1>
				<div className="row">
					{services.map((service) => (
						<CardComponnent
							title={service.title}
							description={service.description}
                            icon={service.icon}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default ServicesComponent;