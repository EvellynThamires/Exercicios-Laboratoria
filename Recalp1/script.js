//Elemento pelo Id
var divOi = document.getElementById("div-um");
var texto = "meu nome";

//Identificar qual tipo de dado.
console.log(typeof divOi);
console.log(divOi); //traz o que está sendo chamado.

//HTML interno. Colocar algo entre as tags do html escolhido.
divOi.innerHTML = "oi " + texto; 

var hello = 2;

function eve(){
    hello = 1;
}

if(true){
    hello = 5
}
else{
    hello = 8
}

console.log(hello);