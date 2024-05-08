import Images from './Images';
function Slider() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Images id={3} title={"This is Images"} />
          </div>
          <div className="carousel-item">
            <Images id={4} title={"This is Images"} />
          </div>

          <div className="carousel-item">
            <Images id={6} title={"This is Images"} />
          </div>
          <div className="carousel-item">
            <Images id={7} title={"This is Images"} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );

}


export default Slider; 