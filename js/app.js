const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) => {
    e.preventDefault();

//Escribir fila
// try{
//     const respuesta = await fetch('https://sheet.best/api/sheets/88cfaa1d-59dd-4dc2-b16e-bc2f8edec9e6', 
//     {
//         method: 'POST', 
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "Nombre": formulario.nombre.value,
//             "Correo" : formulario.correo.value,
//             "Telefono" : formulario.telefono.value
//         })
//     });

//     const contenido = await respuesta.json();
//     console.log(contenido);
//     } catch(error){
//         console.log(error);
//     }

//Leer fila
try{
    const respuesta = await fetch('https://sheet.best/api/sheets/88cfaa1d-59dd-4dc2-b16e-bc2f8edec9e6');

    const contenido = await respuesta.json();
    console.log(contenido);
    } catch(error){
        console.log(error);
    }

//Eliminar fila
// try{
//     const respuesta = await fetch('https://sheet.best/api/sheets/88cfaa1d-59dd-4dc2-b16e-bc2f8edec9e6/0', 
//     {
//         method: 'DELETE', 
//     });

//     const contenido = await respuesta.json();
//     console.log(contenido);
//     } catch(error){
//         console.log(error);
//     }

//Actualizar fila
// try{
//     const respuesta = await fetch('https://sheet.best/api/sheets/88cfaa1d-59dd-4dc2-b16e-bc2f8edec9e6/0', 
//     {
//         method: 'PATCH', 
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "Correo" : "andres@gmail.com",
//         })
//     });

//     const contenido = await respuesta.json();
//     console.log(contenido);
//     } catch(error){
//         console.log(error);
//     }

    registro.classList.remove('activo');
    exito.classList.add('activo');

});