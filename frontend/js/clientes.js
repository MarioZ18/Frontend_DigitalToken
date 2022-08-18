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
var multas=[]
var prestamos=[]


function generarListCli(){
    
    
    document.getElementById('titulolistaClientes').innerHTML=`Lista de Clientes`;
    document.getElementById('cliList').innerHTML=
    `
    <option value=-1 disabled>Seleccione un Libro</option>                  
    `
    document.getElementById('generarListClientes').style.display="block";
    document.getElementById('formularioClientes').style.display="none";
    document.getElementById('datosClientes').style.display="none";
    document.getElementById('accionesClientes').style.display="none";
    
    var bibl=document.getElementById('cliList').value;

    for(let i=0; i<clientesJSON.length; i++){
        var client=clientesJSON[i];
            document.getElementById('cliList').innerHTML+=
            `
            <option value=${client.idCliente}>ID del Cliente:${client.nombre}, Nombre:${client.apellido}, Membresía:${bibl.apellido}</option>                  
            `
        
        
    }

    


}

generarListCli();

function detallesCli() {
    var idCli=document.getElementById('cliList').value;
    if(idCli!=""){
    document.getElementById('accionesClientes').style.display="block";
    document.getElementById('datosClientes').style.display="block";
    document.getElementById('formularioClientes').style.display="none";
    

    
    
    for(var i=0; i<clientesJSON.length; i++){
        cliSelect=clientesJSON[i];
        if(cliSelect.idCliente==idCli){
            document.getElementById('logoCli').innerHTML =
                `
                <div class=" p-3 cuprum">
                Logo
                <br>
                <i class="fa-solid fa-user fa-5x fuenteAzul card-img py-1"></i>
                    
                </div>
                `
                document.getElementById('datosCli').innerHTML =
                `
                ID del CLiente: ${cliSelect.nombre}
                <br>
                Nombre: ${cliSelect.nombre}
                <br>
                Apellido(s): ${cliSelect.nombre}
                <br>
                Membresía: ${cliSelect.nombre}
                <br>
                Numero de Telefono:${cliSelect.nombre}
                <br>
                Correo ELectrónico: ${cliSelect.nombre}
                <br>
                Dirección: ${cliSelect.nombre}
                
                `
                document.getElementById('btnVerDetallesCli').innerHTML =
                `
                <button  class="btn cuprum fondoCeleste bordesAzul bordesRedo m-2 shadow" type="button" onclick="formCli('E');">
                    Editar
                </button>
                <button  class="btn cuprum fondoCeleste bordesAzul bordesRedo m-2 shadow" type="button" onclick="generarListCli();">
                    Aceptar
                 </button>
                `
        }
    }

    }

    
}

function formCli(objetivo) {
    
    document.getElementById('accionesClientes').style.display="block";
    document.getElementById('datosClientes').style.display="none";
    document.getElementById('formularioClientes').style.display="block";


    document.getElementById('tituloFormCli').innerHTML=`Nuevo Cliente`;

        document.getElementById('idCli').value=null;
        document.getElementById('nombreCli').value=null;
        document.getElementById('apellidoCli').value=null;
        document.getElementById('membCli').value=null;
        document.getElementById('telefCli').value=null;
        document.getElementById('correoCli').value=null;
        document.getElementById('direcCli').value=null;
        document.getElementById('fotoCli').value=null;
        


    if(objetivo=="E"){

        document.getElementById('tituloFormCli').innerHTML = `Editar Perfil Del Cliente`;
        var idCli=document.getElementById('cliList').value;
        for(var i=0; i<clientesJSON.length; i++){
            cliSelect=clientesJSON[i];
            if(cliSelect.idCliente==idCli){
                
                document.getElementById('idCli').value=cliSelect.nombre;
                document.getElementById('nombreCli').value=cliSelect.nombre;
                document.getElementById('apellidoCli').value=cliSelect.nombre;
                document.getElementById('membCli').value=cliSelect.nombre;
                document.getElementById('telefCli').value=cliSelect.nombre;
                document.getElementById('correoCli').value=cliSelect.nombre;
                document.getElementById('direcCli').value=cliSelect.nombre;
                document.getElementById('fotoCli').value=cliSelect.nombre;
                

            }
    }

}}

function guardarBib(){
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