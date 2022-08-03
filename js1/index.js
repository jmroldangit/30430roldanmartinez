
function cotizadorSuscripcion(){
  let servicioSuscripcion= prompt("Seleccione el tipo de suscripción, semanal escriba S, mensual escriba M").toLowerCase();
  let valorMensual=1500;
  let valorSemanal=1800;
  if (servicioSuscripcion == "s" || servicioSuscripcion== "m"){
      let mesesSuscripcion = Number  (prompt("por cuántos meses desea recibir novedades?"));
  
          if (servicioSuscripcion =="m"){
              
          let resultado=  (valorMensual * mesesSuscripcion);
          alert(`El valor de la suscripción por ${mesesSuscripcion} mes(es) es: ${resultado}$`);
          }
          else if(servicioSuscripcion == "s"){
              let resultado=  (valorSemanal * mesesSuscripcion);
              alert(`El valor de la suscripción al boletín semanal por ${mesesSuscripcion} mes(es) es: ${resultado}$`);;
          }
  }
       else  {
              alert("Por favor, vuelva a intentarlo");
          }
  }
  cotizadorSuscripcion();

  class Suscripcion{
    constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
  }
  vender(){
    this.vendido = true;
  }
}
let productos = [];

productos.push(new Suscripcion("mensual", 1500));
productos.push(new Suscripcion("semanal", 1800));


for(const item of productos){
  if(item.nombre === "mensual"){
    item.vender()
}
else if(item.nombre === "semanal"){
    item.vender()
}

    
  }
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Ahora completa tus datos de contacto',
    showConfirmButton: false,
    timer: 4000
  })

console.log(productos);

let titulo = document.getElementById("titulo");
titulo.innerText = "Suscripcion a novedades";
console.log( titulo.innerText );

let suscripcion = document.getElementsByClassName("suscripcion");
console.log(suscripcion[0].innerHTML);
console.log(suscripcion[1].innerHTML);
console.log(suscripcion[2].innerHTML);



/* //usuario practica

let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
  let usuario = usuarioStorage;
  let mensaje = `Bienvenid@ ${usuario}`;
  alert(mensaje);
}else{
  usuario = prompt("Ingrese su nombre");
  sessionStorage.setItem("usuario", usuario);
} */
