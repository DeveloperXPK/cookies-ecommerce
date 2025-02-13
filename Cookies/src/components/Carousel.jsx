const imageStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  opacity: "0.7",
};

const buttonStyles = {
  position: "absolute",
  zIndex: "1",
  color: "white",
  display: "inline-flex",
  flexDirection: "column",
};

export default function Carousel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="false"
    >
      <div className="carousel-inner">
        <OrderButton />
        <div className="carousel-item active">
          <img
            src="/3cookies.jpeg"
            className="d-block w-100"
            alt="Cookies"
            style={imageStyles}
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="/defcookies.jpeg"
            className="d-block w-100"
            alt="Krooky Cookies"
            style={imageStyles}
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="/cookieswmilk.jpeg"
            className="d-block w-100"
            alt="Cookies w Milk"
            style={imageStyles}
          ></img>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

function OrderButton() {
  return (
    <div
      className="position-absolute top-50 start-50 translate-middle"
      style={buttonStyles}
    >
      <h3 id="main-subtitle" className="subtitle">
        ¡Pide hoy, RECIBE hoy!
      </h3>
      <button type="button" className="button_page">
        ¡Pide Ahora!
      </button>
    </div>
  );
}
