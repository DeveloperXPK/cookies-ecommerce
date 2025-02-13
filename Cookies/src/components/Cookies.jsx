export default function Cookies({ props }) {
  return (
    <section className="cookies">
      <div className="box-title">
        <h2 className="subtitle-main">Paso 2</h2>
        <h3 className="subtitle">Escoge tus cookies favoritas</h3>
      </div>
      <div className="cookie-info">
        {Object.values(props).map((cookie, index) => (
          <div className="cookieview" key={index}>
            <img
              className="cookie-image"
              src={cookie.cookiesImage}
              alt={cookie.nombre}
            />
            <AddCookieButton /> {/* Nombre corregido */}
            <h3 className="subtitle">{cookie.nombre}</h3>
            <p className="cookie-description">{cookie.cookiesDescription}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const buttonStyles = {
  backgroundColor: "#007bff",
  color: "rgb(250, 236, 223)",
  fontFamily: "Rowdies, serif",
  fontWeight: "bold",
  boxSizing: "border-box",
  borderRadius: "1rem",
  width: "10rem",
  borderColor: "#007bff",
};

function AddCookieButton() {
  return (
    <button className="add-button" style={buttonStyles}>
      Agregar
    </button>
  );
}
