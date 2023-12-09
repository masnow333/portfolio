import "bootstrap/dist/css/bootstrap.css";

type ImageCardProps = {
	title: string;
	text: string;
	preview: string;
	repoLink: string;
	image: string;
};

const ImageCardComponent = ({
	title,
	text,
	preview,
	repoLink,
	image,
}: ImageCardProps) => {
	return (
		<>
			<div className="col-lg-4 col-md-6 mt-4">
				<div className="card mh-400">
					<img
						className="card-img-top mh-220"
						src={image ? image : "src/assets/images/code.jpg"}
						alt="Card image"
					/>
					<div className="card-body">
						<h4 className="card-title">{title}</h4>
						<p className="card-text mh-60">
							{text}
						</p>
						<div className="text-center gap-2 d-flex justify-content-center">
							<a
								href={preview}
								className="btn btn-success"
								hidden={preview === ""}
							>
								preview
							</a>
							<a href={repoLink} className="btn btn-success">
								Repo
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImageCardComponent;
