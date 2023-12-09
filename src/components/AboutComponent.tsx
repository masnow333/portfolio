import "bootstrap/dist/css/bootstrap.css";
function AboutComponent() {
	return (
		<section id="about" className="min-vh-100">
			<div className="container pt-3">
				<h2 className="h1 text-center">About Me</h2>
				<div className="row mt-5">
					<div className="mb-5 col-sm-8 col-md-6 col-lg-4 col-xxl-3 mx-auto">
						<img src="images/about.jpg" className="w-100" alt="About image" />
					</div>

					<div className="col-lg-8">
						<p>
							{" "}
							I am a software engineer with experience in developing web,
							mobile, and desktop applications. I have a broad knowledge of
							cutting-edge technologies, such as Python, JavaScript, React,
							Flutter, and C#. I am also familiar with REST APIs, cloud
							computing, and containerization. I am a creative and
							results-oriented person, always willing to learn new things.
						</p>
						<div className="row mt-3">
							<div className="col-md-6">
								<ul>
									<li>Name: Jonathan Triana</li>
									<li>Occupation: Web/iOS Developer</li>
									<li>Hobbies: Read - Sports</li>
									<li>Favorite animal: Cat</li>
								</ul>
							</div>
						</div>
						<div className="row mt-3">
							<p>
								My goal is to work in a company where I can use my skills and
								experience to solve challenging problems and make a difference
								in the world.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutComponent;
