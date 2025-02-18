const cookiesImageStyles = {
  width: "12rem",
  height: "15rem",
  objectFit: "cover",
};

const buttonStyles = {
  backgroundColor: "#007bff",
  color: "rgb(250, 236, 223)",
  fontFamily: "Rowdies, serif",
  fontWeight: "bold",
  boxSizing: "border-box",
  borderRadius: "1rem",
  width: "10rem",
  borderColor: "#007bff",
  marginTop: "0.5rem",
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
          <AddButton />
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

function AddButton() {
  return (
    <button className="add-button" style={buttonStyles}>
      Agregar
    </button>
  );
}
