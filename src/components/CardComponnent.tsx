import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";

interface CardProps {
    title: string;
    description: string;
    icon: IconDefinition
}

function CardComponnent({title, description, icon}: CardProps) {
	return (
		<div className="col-lg-4 mt-3">
			<div className="card servicesText min-h-card">
				<div className="card-body">
                    <FontAwesomeIcon icon={icon} />
					<i className="servicesIcon fab fa-apple"></i>
					<h4 className="card-title mt-2">{title}</h4>
					<p className="card-text mt-2">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
}

export default CardComponnent;
