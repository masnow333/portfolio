import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactComponent.css';
import {
	faEnvelope,
	faMapMarker,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactComponent = () => {
	return (
		<section id='contact' className='bg-black'>
			<div className='container mt-3 contactContent'>
				<h2 className='text-center text-white h1'>Contact Me</h2>

				<div className='row mt-5'>
					<div className='col-lg-6 col-md-8 col-lg-6 mx-auto'>
						<div
							style={{
								maxWidth: '100%',
								overflow: 'hidden',
								color: 'red',
								width: '500px',
								height: '500px',
							}}
						>
							<div
								id='embedmap-canvas'
								style={{ height: '100%', width: '100%', maxWidth: '100%' }}
							>
								<iframe
									style={{ height: '100%', width: '100%', border: '0' }}
									frameBorder='0'
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.53617525476!2d-74.41967604169908!3d4.64822899251623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses-419!2sco!4v1701916185599!5m2!1ses-419!2sco'
								></iframe>
							</div>
							<a
								className='googlemaps-html'
								href='https://www.embed-map.com'
								id='get-data-forembedmap'
							>
								https://www.embed-map.com
							</a>
						</div>
					</div>

					<div className='mt-5 col-lg-6'>
						<ul className='contact-list p-3'>
							<li className='list-item'>
								<FontAwesomeIcon icon={faMapMarker} />
								<span className='contact-text ms-3'>Bogotá, Colombia</span>
							</li>

							<li className='list-item'>
								<FontAwesomeIcon icon={faPhone} />

								<span className='contact-text ms-3'>
									<a href='tel:+57-301-4994291' title='Give me a call'>
										(+57) 301 4994291
									</a>
								</span>
							</li>

							<li className='list-item'>
								<FontAwesomeIcon icon={faEnvelope} />

								<span className='contact-text ms-3'>
									<a
										href='mailto:jonfertri357@gmail.com'
										title='Send me an email'
									>
										jonfertri357@gmail.com
									</a>
								</span>
							</li>
						</ul>

						<hr className='w-100' />
						<div className='d-flex justify-content-center'>
							<a
								href='https://github.com/masnow333'
								className='social-media contact-icon'
								target="_blank"
							>
								<FontAwesomeIcon icon={faGithub} />
							</a>
							<a
								href='https://www.linkedin.com/in/jonathan-fernando-triana-manrique'
								className='social-media contact-icon'
								target="_blank"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</div>
						<hr className='w-100' />

						<div className='copyright'>&copy; ALL OF THE RIGHTS RESERVED</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactComponent;
