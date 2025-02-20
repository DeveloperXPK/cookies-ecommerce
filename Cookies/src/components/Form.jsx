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

const buttonStyles = {
  width: "20rem",
  height: "auto",
};

export default function Form() {
  return (
    <div className="main-form">
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
      <Direccion />
      <ButtonSendOrder />
    </div>
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

function Direccion() {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" class="form-label">
          Direccion 📨
        </label>
        <input
          type="text"
          style={emailInputStyles}
          className="form-control"
          id="formGroupExampleInput"
          placeholder="¡Tu direccion aqui!"
        />
      </div>
    </>
  );
}

function ButtonSendOrder() {
  return (
    <div>
      <button
        style={buttonStyles}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        ¡ Termina de realizar tu pedido aqui !
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Krooky Cookies
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Termina de realizar tu pedido a la linea de WhatsApp que te
              enviamos
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
