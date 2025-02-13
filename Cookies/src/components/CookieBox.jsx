const cookiesImageStyles = {
  width: "12rem",
  height: "15rem",
  objectFit: "cover",
};

export default function CookieBox() {
  return (
    <>
      <section className="box-title">
        <h2 className="subtitle-main">Paso 1</h2>
        <h2 className="subtitle">¿Cuantas cookies quieres?</h2>
      </section>
      <section className="cookiesbox">
        <div className="boxes-container">
          <img
            src="/Krooky_Galleta.png"
            className="d-block w-100"
            alt="Cookies"
            style={cookiesImageStyles}
          ></img>
          <h3 className="subtitle">Caja x3</h3>
        </div>
        <div className="boxes-container">
          <img
            src=""
            className="d-block w-100"
            alt="Krooky Cookies"
            style={cookiesImageStyles}
          ></img>
        </div>
        <div className="boxes-container">
          <img
            src=""
            className="d-block w-100"
            alt="Cookies w Milk"
            style={cookiesImageStyles}
          ></img>
        </div>
      </section>
    </>
  );
}
