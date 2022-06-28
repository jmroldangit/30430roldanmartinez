let  entrada  =  prompt ( "Ingresar una letra" ) ;
let  salida  =  entrada  +  " "  +  "ingresada" ;
alerta ( salida ) ;

let edad = 21;

if (edad < 16){
  console.log("bienvenido joven");
}else if(edad < 18){
  console.log("bienvenido");
}else if(edad === 19){
  console.log("Bienvenido");
}else{
  console.log("no tienes la edad para ingresar");
}
let usuario = prompt("Ingrese un usuario").toLowerCase();
while(usuario != "Juan"){
  alert("Usuario incorrecto");
  usuario = prompt("Ingrese un usuario");
}
alert("Bienvenido");