const sectionTitleStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "2rem",
  marginTop: "2rem",
};

const inputStyles = {
  width: "25rem",
  height: "auto",
};

const emailInputStyles = {
  width: "50rem",
  height: "auto",
};

export default function Form() {
  return (
    <>
      <SectionTitle />
      <FormNames />
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Correo Electrónico 📧
        </label>
        <input
          type="email"
          style={emailInputStyles}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="¡Tu correo aquí!"
        />
      </div>
    </>
  );
}

function SectionTitle() {
  return (
    <div style={sectionTitleStyles}>
      <h2 className="subtitle-main">¡Por último!</h2>
      <h3 className="subtitle">Danos tus datos para seguir con tu pedido</h3>
    </div>
  );
}

function FormNames() {
  return (
    <div className="row">
      <div className="col">
        <label htmlFor="nombre-input" className="form-label">
          Nombre 🧑🏻
        </label>
        <input
          style={inputStyles}
          type="text"
          id="nombre-input"
          className="form-control"
          placeholder="Nombre"
          aria-label="Nombre"
        />
      </div>
      <div className="col">
        <label htmlFor="apellido-input" className="form-label">
          Apellidos 👀
        </label>
        <input
          style={inputStyles}
          type="text"
          id="apellido-input"
          className="form-control"
          placeholder="Apellidos"
          aria-label="Apellidos"
        />
      </div>
    </div>
  );
}
