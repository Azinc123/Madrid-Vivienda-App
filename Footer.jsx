import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p> Contacto: pedro.hermida.lopez@gmail.com</p>
      <p>  {currentYear} </p>
    </footer>
  );
}

export default Footer;
