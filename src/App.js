import React from "react";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-xs-12 col-md-6 p-5 bg-dark rounded-3">
          <h1 className="text-white">Formulario</h1>
          <form>
            <div class="mb-3">
              <label for="nombre" class="form-label text-white">
                Nombre
              </label>
              <input
                type="email"
                class="form-control bg-dark border-primary"
                id="nombre"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="apellido" class="form-label text-white">
                Apellido
              </label>
              <input
                type="text"
                class="form-control bg-dark border-primary"
                id="apellido"
              />
            </div>
            <div class="mb-3">
              <label for="equipo_id" class="form-label text-white">
                Numero de equipo
              </label>
              <input
                type="number"
                class="form-control bg-dark border-primary"
                id="equipo_id"
              />
            </div>

            <button type="submit" class="btn btn-success">
              Añadir nuevo estudiante
            </button>
          </form>
        </div>

        <div className="col-xs-12 col-md-6 p-5 bg-dark rounded-3">
          <h2 className="text-white">Lista de estudiantes</h2>
          <table class="table border-primary bg-info">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Numero de equipo</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Yerko</td>
                <td>Medina</td>
                <td>5</td>
                <td>
                  <button type="button" class="btn btn-primary m-1">
                    Editar
                  </button>
                  <button type="button" class="btn btn-danger m-1">
                    Eliminar
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
