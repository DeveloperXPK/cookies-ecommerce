import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Carousel from "./components/Carousel.jsx";
import CookieBox from "./components/CookieBox.jsx";
import Cookies from "./components/Cookies.jsx";
import Form from "./components/Form.jsx";

function App() {
  const cookiesInfo = [
    {
      nombre: "Coco & Chocolate Blanco",
      cookiesImage: "/Krooky_Galleta Chocolate Blanco.png",
      cookiesDescription:
        "Cada bocado te lleva a esas tardes soleadas,con el crujir de las almendras, la suavidad del relleno de coco, y un toque de chispas dechocolate, todo envuelto en coco rallado.",
    },
    {
      nombre: "Cookies & Cream",
      cookiesImage: "/Krooky_Galleta Cookies & Cream.png",
      cookiesDescription:
        "El sabor de abrir un paquete de galletas Oreo después de hacer la tarea, con una cremita que nunca fallaba. Ahora vuelve pero mejor y mas cremoso",
    },
    {
      nombre: "Red Velvet",
      cookiesImage: "/Krooky_Galleta Red Velvet.png",
      cookiesDescription:
        "Como un trocito de pastel que mamá preparaba para las ocasiones especiales, pero en versión galleta y con ese toque de queso crema que sabe a felicidad.",
    },
    {
      nombre: "Arequipe Macadamia",
      cookiesImage: "/Krooky_Galleta Macadamia.png",
      cookiesDescription:
        "Ese primer mordisco es como volver a esastardes de domingo cuando te regalaban un dulcecito por ser el mas juicioso de la casa.",
    },
    {
      nombre: "Chocolate Arequipe",
      cookiesImage: "/Krooky_Galleta Chocolate.png",
      cookiesDescription:
        "¿Recuerdas cuando se te iluminaban los ojos alver un chocolate después del almuerzo? Así se siente cada pedacito de esta galleta,",
    },
    {
      nombre: "Nutella",
      cookiesImage: "Krooky_Galleta Nutella.png",
      cookiesDescription:
        "Aquel momento mágico cuando untabas la cuchara en el frasco de Nutella a escondidas ahora capturado en cada mordida con un toque crujiente de nueces.",
    },
  ];

  return (
    <>
      <section>
        <Navbar />
        <Carousel />
      </section>
      <section>
        <img
          id="certificate-image"
          src="/Krooky_Sticker Certificate.png"
          alt="Krooky Sticker"
        ></img>
        <CookieBox />
      </section>
      <section>
        <img
          id="animation-image"
          src="/Krooky_Cookies.png"
          alt="Cookies Sticker"
        ></img>
        <Cookies props={cookiesInfo} />
      </section>
      <section>
        <Form />
      </section>
    </>
  );
}

export default App;
