export default function ServicesComp() {
  return (
    <>
      <div className="container text-dark pt-3 mb-2">
        <h2 className="h2 text-primary text-center baskerville-font">
          Services
        </h2>
        <div className="d-flex text-center justify-content-center">
          <p className="text-container">
            We offer commercial and domestic services, here are a few examples:
          </p>
        </div>
        <div className="row text-dark">
          <div className="col mb-3">
            <div className="card">
              <img src="#" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="h5 card-title">Gardening</p>

                <ul className="card-text">
                  <li>Grass Cutting</li>
                  <li>Weeding</li>
                  <li>Hedge Trimming</li>
                </ul>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card">
              <img src="#" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="h5 card-title">Landscaping</p>
                <ul className="card-text">
                  <li>Turf Laying</li>
                  <li>Tree Removal</li>
                  <li>Fencing</li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card">
              <img src="#" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="h5 card-title">Structural</p>
                <ul className="card-text">
                  <li>Slabbing</li>
                  <li>Drive/Patio Cleaning</li>
                  <li>Sheds</li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
