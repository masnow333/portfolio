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
			<div className="col-lg-4 mt-4">
				<div className="card" style={{ height: "400px" }}>
					<img
						className="card-img-top"
						src={image ? image : "src/assets/images/code.jpg"}
						alt="Card image"
						style={{ height: "220px" }}
					/>
					<div className="card-body">
						<h4 className="card-title">{title}</h4>
						<p className="card-text" style={{ height: "60px" }}>
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
