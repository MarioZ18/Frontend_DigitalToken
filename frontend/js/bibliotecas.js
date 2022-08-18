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

function generarListBib(){

    document.getElementById('bibList').innerHTML=null;
    document.getElementById('accionesBiblioteca').style.display="none";
    document.getElementById('datosBiblioteca').style.display="none";
    document.getElementById('formularioBiblioteca').style.display="none";

    for(let i=0; i<bibliotecasJson.length; i++){
        var bibl=bibliotecasJson[i];

        document.getElementById('bibList').innerHTML+=
            `
            <option value=${bibl.idBiblioteca}>ID de la Biblioteca:${bibl.idBiblioteca}, Nombre :${bibl.nombre}, Ubicación:${bibl.ubicacion}</option>                  
            `
    }

}
generarListBib();

function detallesBib() {
    var idBib=document.getElementById('bibList').value;
    if(idBib!=""){
        document.getElementById('accionesBiblioteca').style.display="block";
    document.getElementById('datosBiblioteca').style.display="block";
    document.getElementById('formularioBiblioteca').style.display="none";

    
    
    for(var i=0; i<bibliotecasJson.length; i++){
        bibSelect=bibliotecasJson[i];
        if(bibSelect.idBiblioteca==idBib){
            document.getElementById('imgBib').innerHTML =
                            `
                            <div class=" p-3 cuprum">
                            Logo
                            <br>
                            <i class="fa-solid fa-landmark fa-5x fuenteAzul card-img py-1"></i>
                                
                            </div>
                            `

                            document.getElementById('datosBib').innerHTML =
                            `
                            ID de la Biblioteca: ${bibSelect.nombre}
                            <br>
                            Nombre de la Biblioteca: ${bibSelect.nombre}
                            <br>
                            Ubicación: ${bibSelect.nombre}
                            <br>
                            Numero de Telefono:${bibSelect.nombre}
                            <br>
                            Hora de Apertura: ${bibSelect.nombre}
                            <br>
                            Hora de Cierre: ${bibSelect.nombre}
                            `

                            document.getElementById('btnVerDetallesBib').innerHTML =
                            `
                            <button  class="btn cuprum fondoCeleste bordesAzul bordesRedo m-2 shadow" type="button" onclick="formBiblioteca('E');">
                                Editar
                            </button>
                            <button  class="btn cuprum fondoCeleste bordesAzul bordesRedo m-2 shadow" type="button" onclick="generarListBib();">
                                Aceptar
                             </button>
                            `
        }
    }

    }

    
}

function formBiblioteca(objetivo) {
    document.getElementById('accionesBiblioteca').style.display="block";
    document.getElementById('datosBiblioteca').style.display="none";
    document.getElementById('formularioBiblioteca').style.display="block";

    if(objetivo=="E"){

        document.getElementById('tituloFormBib').innerHTML = `Editar Biblioteca`;
        var idBib=document.getElementById('bibList').value;
        for(var i=0; i<bibliotecasJson.length; i++){
            bibSelect=bibliotecasJson[i];
            if(bibSelect.idBiblioteca==idBib){
                
                document.getElementById('idBib').value=bibSelect.nombre;
                document.getElementById('nombreBib').value=bibSelect.nombre;
                document.getElementById('ubicacionBib').value=bibSelect.nombre;
                document.getElementById('telefBib').value=bibSelect.nombre;
                document.getElementById('haBib').value=bibSelect.nombre;
                document.getElementById('hcBib').value=bibSelect.nombre;
                document.getElementById('imgBib').value=bibSelect.nombre;
            }
        }
        

    }else{
        document.getElementById('tituloFormBib').innerHTML = `Añadir Biblioteca`;
        document.getElementById('idBib').value=null;
        document.getElementById('nombreBib').value=null;
        document.getElementById('ubicacionBib').value=null;
        document.getElementById('telefBib').value=null;
        document.getElementById('haBib').value=null;
        document.getElementById('hcBib').value=null;
        document.getElementById('imgBib').value=null;
    }

}

function guardarBib(){
    /*var idBib=document.getElementById('bibList').value;
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
        generarListBib();
}