import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactComponent.css";
import {
	faEnvelope,
	faMapMarker,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactComponent = () => {
	return (
		<section id="contact" className="bg-black">
			<div className="container mt-3 contactContent">
				<h1 className="text-center text-white">Contact Me</h1>

				<div className="row mt-5">
					<div className="col-lg-6">
						<div
							style={{
								maxWidth: "100%",
								overflow: "hidden",
								color: "red",
								width: "500px",
								height: "500px",
							}}
						>
							<div
								id="embedmap-canvas"
								style={{ height: "100%", width: "100%", maxWidth: "100%" }}
							>
								<iframe
									style={{ height: "100%", width: "100%", border: "0" }}
									frameBorder="0"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.53617525476!2d-74.41967604169908!3d4.64822899251623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses-419!2sco!4v1701916185599!5m2!1ses-419!2sco"
								></iframe>
							</div>
							<a
								className="googlemaps-html"
								href="https://www.embed-map.com"
								id="get-data-forembedmap"
							>
								https://www.embed-map.com
							</a>
						</div>
					</div>

					<div className="direct-contact-container d-flex flex-column justify-content-center">
						<ul className="contact-list">
							<li className="list-item">
								<FontAwesomeIcon icon={faMapMarker} />
								<span className="contact-text place">Bogotá, Colombia</span>
							</li>

							<li className="list-item">
								<FontAwesomeIcon icon={faPhone} />

								<span className="contact-text phone">
									<a href="tel:+57-301-4994291" title="Give me a call">
										(+57) 301 4994291
									</a>
								</span>
							</li>

							<li className="list-item">
								<FontAwesomeIcon icon={faEnvelope} />

								<span className="contact-text gmail">
									<a
										href="mailto:jonfertri357@gmail.com"
										title="Send me an email"
									>
										jonfertri357@gmail.com
									</a>
								</span>
							</li>
						</ul>

						<hr className="w-100" />
						<ul className="social-media-list d-flex gap-3 justify-content-center">
							<a href="https://github.com/masnow333" className="contact-icon">
								<li>
									<FontAwesomeIcon icon={faGithub} />
								</li>
							</a>

							<a
								href="https://www.linkedin.com/in/jonathan-fernando-triana-manrique"
								className="contact-icon"
							>
								<li>
									<FontAwesomeIcon icon={faLinkedin} />
								</li>
							</a>
						</ul>
						<hr className="w-100" />

						<div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactComponent;
