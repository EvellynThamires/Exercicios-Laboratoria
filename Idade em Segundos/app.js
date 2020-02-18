// Perguntar a idade pelo prompt

var age = parseInt (prompt("Qual é a sua idade?"))

//Converter em segundos

//idade, dias, horas, min. segundos.
var ageInSeconds = age * 365 * 24 * 60 * 60

document.write("Em seus " + age + " tantos anos de idade, se passaram " + ageInSeconds + " segundos ")

