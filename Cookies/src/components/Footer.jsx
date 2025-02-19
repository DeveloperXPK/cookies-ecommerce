const titleStyles = {
  fontSize: "2.8rem",
  marginTop: "1rem",
  marginBottom: "1rem",
  textAlign: "center",
};

export default function Footer() {
  return (
    <>
      <footer>
        <h3 style={titleStyles} className="subtitle-main">
          ¡Siguenos en nuestro Insta para enterarte de más! 👀
        </h3>
        <a href="https://www.instagram.com/krookys_/" target="_blank_">
          <img className="insta-image" src="./public/instagram.svg"></img>
        </a>
      </footer>
    </>
  );
}
