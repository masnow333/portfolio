import 'bootstrap/dist/css/bootstrap.css';
import background from '/images/heroImage.jpg'

function MainBanner() {
  return (
    <section className="bgimage vw-100" id="home" style={{backgroundImage: `url(${background})`}}>
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                <h2 className="h1">Hi, it's me Jonathan</h2>
                <p className="h3 fw-normal mx-3">I'm a professional Web and iOS Developer</p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default MainBanner
