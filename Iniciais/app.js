//Perguntar nome e sobrenome
var name = prompt("Qual o seu nome e sobrenome?");

//pegar a primeira letra do primeiro nome. 
//Slice para pegar partes do nome.
var firstInitial = name.slice(0,1);

//pegar a posição da primeira letra do sobrenome
//IndexOf, colocamos uma informação e ele nos retorna em que posição está.
var secondInitialPosition = name.indexOf(" ") + 1;

//pegar a primeira letra do segundo nome
//Segunda posição inicial + 1
var secondInitial = name.slice(secondInitialPosition, secondInitialPosition + 1);

//toUpperCase para a primeira letra ser a maiuscula.
document.write("Suas iniciais são " + firstInitial.toUpperCase() + secondInitial.toUpperCase());