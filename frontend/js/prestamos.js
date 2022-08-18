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


var clientesJSON=[{
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
var librosJson=[
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
        "idBiblioteca":2,
        "nombre":"Suma",
        "apellido":"Sierra",
        "correo":"a",
        "contraseña":"a",
        "ubicacion":"Tegucigalpa FM., HN",
        "telefono":"+504 9999-9901",
       "tipo":"Empleado"
       },
]

var librosNuevosJson=[
    {
        "idLibro":1,
        "idBiblioteca":1,
        "nombre":"como como",
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
        "nombre":"Somalia",
        "apellido":"Sierra",
        "correo":"a",
        "contraseña":"a",
        "ubicacion":"Tegucigalpa FM., HN",
        "telefono":"+504 9999-9901",
       "tipo":"Empleado"
       },
    {
        "idLibro":3,
        "idBiblioteca":2,
        "nombre":"Suma",
        "apellido":"Sierra",
        "correo":"a",
        "contraseña":"a",
        "ubicacion":"Tegucigalpa FM., HN",
        "telefono":"+504 9999-9901",
       "tipo":"Empleado"
       },
]

var librosRetiradosJson=[
    {
        "idLibro":5,
        "idBiblioteca":1,
        "nombre":"Como no ser",
        "apellido":"Sierra",
        "correo":"a",
        "contraseña":"a",
        "ubicacion":"Tegucigalpa FM., HN",
        "telefono":"+504 9999-9901",
       "tipo":"Empleado"
       },
       {
        "idLibro":6,
        "idBiblioteca":2,
        "nombre":"Como si ser",
        "apellido":"Sierra",
        "correo":"a",
        "contraseña":"a",
        "ubicacion":"Tegucigalpa FM., HN",
        "telefono":"+504 9999-9901",
       "tipo":"Empleado"
       },
    {
        "idLibro":7,
        "idBiblioteca":2,
        "nombre":"Como no saber si ser",
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
var Prestamos=[]
var prestamos=[]


function generarListPres(){
    
    
    document.getElementById('titulolistaPrestamos').innerHTML=`Lista de Prestamos`;
    document.getElementById('presList').innerHTML=
    `
    <option value=-1 disabled>Seleccione un Libro</option>                  
    `
    document.getElementById('generarListPrestamos').style.display="block";
    document.getElementById('formularioPrestamos').style.display="none";
    document.getElementById('datosPrestamos').style.display="none";
    document.getElementById('accionesPrestamos').style.display="none";
    
    var bibl=document.getElementById('presList').value;

    for(let i=0; i<clientesJSON.length; i++){
        var client=clientesJSON[i];
            document.getElementById('presList').innerHTML+=
            `
            <option value=${client.idCliente}>ID de la Biblioteca:${client.nombre}, Nombre Empresa:${client.apellido}, Ubicación:${bibl.apellido}</option>                  
            `
        
        
    }

    


}

generarListPres();

function detallesPres() {
    var idCli=document.getElementById('presList').value;
    if(idCli!=""){
    document.getElementById('accionesPrestamos').style.display="block";
    document.getElementById('datosPrestamos').style.display="block";
    document.getElementById('formularioPrestamos').style.display="none";
    

    
    
    for(var i=0; i<clientesJSON.length; i++){
        cliSelect=clientesJSON[i];
        if(cliSelect.idCliente==idCli){
            document.getElementById('logoPres').innerHTML =
                `
                <div class=" p-3 cuprum">
                Logo
                            <br>
                            <i class="fa-solid fa-book fa-5x fuenteAzul card-img py-1"></i>
                                
                            </div>
                            `

                            document.getElementById('datosPres').innerHTML =
                            `
                            Nombre de la Empresa: ${cliSelect.nombre}
                            <br>
                            Categoria: ${cliSelect.nombre}
                            <br>
                            Numero de Telefono:${cliSelect.nombre}
                            <br>
                            Representante: ${cliSelect.nombre}
                            <br>
                            RTN: ${cliSelect.nombre}
                            `

                            document.getElementById('btnVerDetallesPres').innerHTML =
                            `
                            <button  class="btn cuprum fondoCeleste bordesAzul bordesRedo m-2 shadow" type="button" onclick="complPresta();">
                                Completar
                            </button>
                            <button  class="btn cuprum fondoCeleste bordesAzul bordesRedo m-2 shadow" type="button" onclick="generarListPres();">
                                Aceptar
                             </button>
                            `
        }
    }

    }

    
}

function complPresta() {
    generarListPres();
}

function formPres(objetivo) {
    
    document.getElementById('accionesPrestamos').style.display="block";
    document.getElementById('datosPrestamos').style.display="none";
    document.getElementById('formularioPrestamos').style.display="block";


    document.getElementById('tituloFormPres').innerHTML=`Nuevo Cliente`;

        document.getElementById('nombEdEm').value=null;
        document.getElementById('catEdEm').value=null;
        document.getElementById('telefEdEm').value=null;
        document.getElementById('repreEdEm').value=null;
        document.getElementById('rtnEdEm').value=null;
        document.getElementById('logoEdEm').value=null;


    if(objetivo=="E"){

        document.getElementById('tituloFormPres').innerHTML = `Editar Presta`;
        var idCli=document.getElementById('PresList').value;
        for(var i=0; i<clientesJSON.length; i++){
            cliSelect=clientesJSON[i];
            if(cliSelect.idCliente==idCli){
                
                document.getElementById('nombEdEm').value=cliSelect.nombre;
                document.getElementById('catEdEm').value=cliSelect.nombre;
                document.getElementById('telefEdEm').value=cliSelect.nombre;
                document.getElementById('repreEdEm').value=cliSelect.nombre;
                document.getElementById('rtnEdEm').value=cliSelect.nombre;
                document.getElementById('logoEdEm').value=cliSelect.nombre;
            }
    }

}}

function guardarPres(){
   /* var idBib=document.getElementById('libList').value;
        for(var i=0; i<bibliotecasJson.length; i++){
            bibSelect=bibliotecasJson[i];
            if(bibSelect.idBiblioteca==idBib){
                console.log('es para editar')
                bibSelect.nombre=document.getElementById('nombEdEm').value;
                bibSelect.apellido=document.getElementById('catEdEm').value;
                bibSelect.correo=document.getElementById('telefEdEm').value;
                bibSelect.contraseña=document.getElementById('repreEdEm').value;
                bibSelect.ubicacion=document.getElementById('rtnEdEm').value;
                bibSelect.tipo=document.getElementById('logoEdEm').value;
            }{
                var nuevaBib={
                    "idBiblioteca":document.getElementById('nombEdEm').value,
                    "nombre":document.getElementById('nombEdEm').value,
                    "apellido":document.getElementById('nombEdEm').value,
                    "correo":document.getElementById('nombEdEm').value,
                    "contraseña":document.getElementById('nombEdEm').value,
                    "ubicacion":document.getElementById('nombEdEm').value,
                    "telefono":document.getElementById('nombEdEm').value,
                    "tipo":"Empleado"
                }
                bibliotecasJson.push(nuevaBib);
            }
        }
*/
generarListCli();
}