
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

productos.push(new suscripcion("mensual", 1500));
productos.push(new suscripcion("semanal", 1800));


for(const item of productos){
    if(item.nombre === "mensual"){
        item.vender()
    }
    else if(item.nombre === "semanal"){
        item.vender()
    }
    
  }

console.log(productos);