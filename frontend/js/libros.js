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

function generarListBib(){
    document.getElementById('titulolistaLibros').innerHTML=`Seleccionar Biblioteca`;
    document.getElementById('bibList').innerHTML=
    `
    <option value=0>Todas</option>                  
    `
    ;
    document.getElementById('generarListBibL').style.display="block";
    document.getElementById('generarListLibros').style.display="none";
    document.getElementById('accionesLibros').style.display="none";
    document.getElementById('datosLibros').style.display="none";
    document.getElementById('formularioLibros').style.display="none";

    for(let i=0; i<bibliotecasJson.length; i++){
        var bibl=bibliotecasJson[i];

        document.getElementById('bibList').innerHTML+=
            `
            <option value=${bibl.idBiblioteca}>ID de la Biblioteca:${bibl.idBiblioteca}, Nombre Empresa:${bibl.nombre}, Ubicación:${bibl.ubicacion}</option>                  
            `
    }

}
generarListBib();


function generarListLib(tipo){
    document.getElementById('btnEliminarLib').disabled=false;
            document.getElementById('btnNuevoLib').disabled=false;
    
    if(tipo=='N'){
        var tip=librosNuevosJson;
        
    }else{
        if(tipo=="R"){
            var tip=librosRetiradosJson;
            document.getElementById('btnEliminarLib').disabled=true;
            document.getElementById('btnNuevoLib').disabled=true;
            
            
        }else{
            var tip=librosJson; 
             
        }
    }
    document.getElementById('titulolistaLibros').innerHTML=`Lista de Libros`;
    document.getElementById('libList').innerHTML=
    `
    <option value=-1 disabled>Seleccione un Libro</option>                  
    `
    document.getElementById('generarListLibros').style.display="block";
    document.getElementById('generarListBibL').style.display="none";
    
    var bibl=document.getElementById('bibList').value;

    for(let i=0; i<tip.length; i++){
        var libro=tip[i];
        
        if(bibl==0){
            document.getElementById('libList').innerHTML+=
            `
            <option value=${libro.idLibro}>ID de la Biblioteca:${libro.idLibro}, Nombre Empresa:${libro.nombre}, Ubicación:${bibl.apellido}</option>                  
            `
        }else{
            
                if(bibl==libro.idBiblioteca){
                    document.getElementById('libList').innerHTML+=
                    `
                    <option value=${libro.idLibro}>ID de la Biblioteca:${libro.idLibro}, Nombre Empresa:${libro.nombre}, Ubicación:${libro.apellido}</option>                  
                    `
                }
        }
        
    }


}


function detallesLib() {
    var idLib=document.getElementById('libList').value;
    if(idLib!=""){
        document.getElementById('accionesLibros').style.display="block";
    document.getElementById('datosLibros').style.display="block";
    document.getElementById('formularioLibros').style.display="none";

    
    
    for(var i=0; i<librosJson.length; i++){
        libSelect=librosJson[i];
        if(libSelect.idLibro==idLib){
            document.getElementById('logoLib').innerHTML =
                `
                <div class=" p-3 cuprum">
                Logo
                            <br>
                            <i class="fa-solid fa-book fa-5x fuenteAzul card-img py-1"></i>
                                
                            </div>
                            `

                            document.getElementById('datosLib').innerHTML =
                            `
                            Nombre de la Empresa: ${libSelect.nombre}
                            <br>
                            Categoria: ${libSelect.nombre}
                            <br>
                            Numero de Telefono:${libSelect.nombre}
                            <br>
                            Representante: ${libSelect.nombre}
                            <br>
                            RTN: ${libSelect.nombre}
                            `

                            document.getElementById('btnVerDetallesLib').innerHTML =
                            `
                            <button  class="btn cuprum fondoCeleste bordesAzul bordesRedo m-2 shadow" type="button" onclick="formLibro('E');">
                                Editar
                            </button>
                            <button  class="btn cuprum fondoCeleste bordesAzul bordesRedo m-2 shadow" type="button" onclick="generarListLib('L');">
                                Aceptar
                             </button>
                            `
        }
    }

    }

    
}

function formLibro(objetivo) {
    document.getElementById('accionesLibros').style.display="block";
    document.getElementById('datosLibros').style.display="none";
    document.getElementById('formularioLibros').style.display="block";

    if(objetivo=="E"){

        document.getElementById('tituloFormLib').innerHTML = `Editar Libro`;
        var idLib=document.getElementById('libList').value;
        for(var i=0; i<librosJson.length; i++){
            libSelect=librosJson[i];
            if(libSelect.idLib==idLib){
                
                document.getElementById('nombEdEm').value=bibSelect.nombre;
                document.getElementById('catEdEm').value=bibSelect.nombre;
                document.getElementById('telefEdEm').value=bibSelect.nombre;
                document.getElementById('repreEdEm').value=bibSelect.nombre;
                document.getElementById('rtnEdEm').value=bibSelect.nombre;
                document.getElementById('logoEdEm').value=bibSelect.nombre;
            }
        }
        

    }else{
        document.getElementById('tituloFormLib').innerHTML = `Añadir Libro`;
        document.getElementById('nombEdEm').value=null;
        document.getElementById('catEdEm').value=null;
        document.getElementById('telefEdEm').value=null;
        document.getElementById('repreEdEm').value=null;
        document.getElementById('rtnEdEm').value=null;
        document.getElementById('logoEdEm').value=null;
    }

}

function guardarBib(){
    var idBib=document.getElementById('libList').value;
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

        generarListBib();
}