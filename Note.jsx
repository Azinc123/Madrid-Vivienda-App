import React from "react";

function Note() {
  return (
    <div className="note">
      <h1>Desde aquí se irán poniendo las diferentes fases del proyecto</h1>
      <p>Se desglosará presupuesto con fecha de inicio y fecha de finalización</p>
      <p></p>
    
      <h1>Fase de adecuación. Tareas a realizar:  Presupuesto:  </h1>
      <p>Ej. Instalación Fontaneria tiene un coste con un desglose de x€ </p>
      <p> Fecha de inicio:                  Fecha de finalización:</p>

      <h1>Fase de puesta en alquiler: Tareas a realizar: Presupuesto</h1>
      <p>Ej. Labores de limpieza y amueblado tiene un coste y un desglose de x€: </p>
      <p>Fecha de inicio:                  Fecha de finalización:</p>

      <h2> Esta hoja sólo tiene efectos informativos, se adaptará a las necesidades del cliente subcontratándose o poniendo en relación al cliente con el profesional correspondiente</h2>
    </div>
  );
}

export default Note;
