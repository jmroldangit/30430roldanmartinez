
function cotizadorSuscripcion(){
  let servicioSuscripcion= prompt("Seleccione el tipo de suscripción, semanal escriba S, mensual escriba M").toLowerCase();
  let valorMensual=1500;
  let valorSemanal=1800;
  if (servicioSuscripcion == "S" || servicioSuscripcion== "M"){
      let mesesSuscripcion = Number  (prompt("por cuántos meses desea recibir novedades?"));
  
          if (servicioSuscripcion =="M"){
              
          let resultado=  (valorMensual * mesesSuscripcion);
          alert(`El valor de la suscripción por ${mesesSuscripcion} mes(es) es: ${resultado}$`);
          }
          else if(servicioSuscripcion == "S"){
              let resultado=  (valorSemanal * mesesSuscripcion);
              alert(`El valor de la suscripción al boletín semanal por ${mesesSuscripcion} mes(es) es: ${resultado}$`);;
          }
  }
       else  {
              alert("Por favor, vuelva a intentarlo");
          }
  }
  cotizadorSuscripcion();