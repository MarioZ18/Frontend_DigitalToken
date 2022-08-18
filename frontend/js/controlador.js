var perfilAct=[
    {
        "id":1,
        "nombre":"Carlos",
        "apellido":"Sierra",
        "correo":"a",
        "contraseña":"a",
        "ubicacion":"Tegucigalpa FM., HN",
        "telefono":"+504 9999-9901",
       "tipo":"Empleado"
       },
]

var bibliotecasJson=[{
    "idBiblioteca":1,
    "nombre":"Carlos",
    "apellido":"Sierra",
    "correo":"a",
    "contraseña":"a",
    "ubicacion":"Tegucigalpa FM., HN",
    "telefono":"+504 9999-9901",
   "tipo":"Empleado"
   },
   {
    "idBiblioteca":2,
    "nombre":"Carla",
    "apellido":"Sierra",
    "correo":"a",
    "contraseña":"a",
    "ubicacion":"Tegucigalpa FM., HN",
    "telefono":"+504 9999-9901",
   "tipo":"Empleado"
   },]


var clientes=[{
    "idCliente":1,
    "nombre":"marco",
    "apellido":"Sierra",
    "correo":"a",
    "contraseña":"a",
    "ubicacion":"Tegucigalpa FM., HN",
    "telefono":"+504 9999-9901",
   "tipo":"Empleado"
   },
   {
    "idCliente":2,
    "nombre":"Karla",
    "apellido":"Sierra",
    "correo":"a",
    "contraseña":"a",
    "ubicacion":"Tegucigalpa FM., HN",
    "telefono":"+504 9999-9901",
   "tipo":"Empleado"
   },]


var empleados=[{
    "idEmpleado":1,
    "nombre":"Tomas",
    "apellido":"Sierra",
    "correo":"a",
    "contraseña":"a",
    "ubicacion":"Tegucigalpa FM., HN",
    "telefono":"+504 9999-9901",
   "tipo":"Empleado"
   },]
var libros=[
    {
        "idLibro":1,
        "idBiblioteca":1,
        "nombre":"Soma",
        "apellido":"Sierra",
        "correo":"a",
        "contraseña":"a",
        "ubicacion":"Tegucigalpa FM., HN",
        "telefono":"+504 9999-9901",
       "tipo":"Empleado"
       },
       {
        "idLibro":2,
        "idBiblioteca":1,
        "nombre":"Sama",
        "apellido":"Sierra",
        "correo":"a",
        "contraseña":"a",
        "ubicacion":"Tegucigalpa FM., HN",
        "telefono":"+504 9999-9901",
       "tipo":"Empleado"
       },
    {
        "idLibro":3,
        "idBiblioteca":1,
        "nombre":"Suma",
        "apellido":"Sierra",
        "correo":"a",
        "contraseña":"a",
        "ubicacion":"Tegucigalpa FM., HN",
        "telefono":"+504 9999-9901",
       "tipo":"Empleado"
       },
]
var computadoras=[]
var impresoras=[] 
var multas=[]
var prestamos=[]




function navbar(){
 document.getElementById('nv').innerHTML+=`
 <div class="container-fluid">
      <a class="navbar-brand" href="home.html"><img id="logo-home" style="width:50px; height:50px;" src="img/DT_logo.png" ></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="bibliotecas.html">Bibliotecas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="libros.html">Inventario</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Clientes
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="clientes.html">Clientes</a></li>
              <li><a class="dropdown-item" href="multas.html">Multas</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="prestamos.html">Prestamos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="empleados.html">Empleados</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Equipos
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="pcs.html">Computadoras</a></li>
              <li><a class="dropdown-item" href="impresoras.html">Impresoras</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="perfil.html">Perfil</a>
          </li>
          
        </ul>
      </div>
    </div>
 `;
}
navbar();





