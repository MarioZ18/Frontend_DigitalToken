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
var imEmporas=[] 
var Empleados=[]
var Empleados=[]


function generarListEmp(){
    
    
    document.getElementById('titulolistaEmpleados').innerHTML=`Lista de Empleados`;
    document.getElementById('empList').innerHTML=
    `
    <option value=-1 disabled>Seleccione un Libro</option>                  
    `
    document.getElementById('generarListEmpleados').style.display="block";
    document.getElementById('formularioEmpleados').style.display="none";
    document.getElementById('datosEmpleados').style.display="none";
    document.getElementById('accionesEmpleados').style.display="none";
    
    var bibl=document.getElementById('empList').value;

    for(let i=0; i<clientesJSON.length; i++){
        var client=clientesJSON[i];
            document.getElementById('empList').innerHTML+=
            `
            <option value=${client.idCliente}>ID de la Biblioteca:${client.nombre}, Nombre EmEmpa:${client.apellido}, Ubicación:${bibl.apellido}</option>                  
            `
        
        
    }

    


}

generarListEmp();

function detallesEmp() {
    var idCli=document.getElementById('empList').value;
    if(idCli!=""){
    document.getElementById('accionesEmpleados').style.display="block";
    document.getElementById('datosEmpleados').style.display="block";
    document.getElementById('formularioEmpleados').style.display="none";
    

    
    
    for(var i=0; i<clientesJSON.length; i++){
        cliSelect=clientesJSON[i];
        if(cliSelect.idCliente==idCli){
            document.getElementById('logoEmp').innerHTML =
                `
                <div class=" p-3 cuprum">
                Logo
                            <br>
                            <i class="fa-solid fa-book fa-5x fuenteAzul card-img py-1"></i>
                                
                            </div>
                            `

                            document.getElementById('datosEmp').innerHTML =
                            `
                            Nombre de la EmEmpa: ${cliSelect.nombre}
                            <br>
                            Categoria: ${cliSelect.nombre}
                            <br>
                            Numero de Telefono:${cliSelect.nombre}
                            <br>
                            ReEmpentante: ${cliSelect.nombre}
                            <br>
                            RTN: ${cliSelect.nombre}
                            `

                            document.getElementById('btnVerDetallesEmp').innerHTML =
                            `
                            <button  class="btn cuprum fondoCeleste bordesAzul bordesRedo m-2 shadow" type="button" onclick="complEmpta();">
                                Completar
                            </button>
                            <button  class="btn cuprum fondoCeleste bordesAzul bordesRedo m-2 shadow" type="button" onclick="generarListEmp();">
                                Aceptar
                             </button>
                            `
        }
    }

    }

    
}

function complEmpta() {
    generarListEmp();
}

function formEmp(objetivo) {
    
    document.getElementById('accionesEmpleados').style.display="block";
    document.getElementById('datosEmpleados').style.display="none";
    document.getElementById('formularioEmpleados').style.display="block";


    document.getElementById('tituloFormEmp').innerHTML=`Nuevo Cliente`;

        document.getElementById('nombEdEm').value=null;
        document.getElementById('catEdEm').value=null;
        document.getElementById('telefEdEm').value=null;
        document.getElementById('repreEdEm').value=null;
        document.getElementById('rtnEdEm').value=null;
        document.getElementById('logoEdEm').value=null;


    if(objetivo=="E"){

        document.getElementById('tituloFormEmp').innerHTML = `Editar Empta`;
        var idCli=document.getElementById('empList').value;
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

function guardarEmp(){
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