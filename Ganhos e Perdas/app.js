//Perguntar as entradas
var income = prompt("Qual é o valor da entrada?");

//saídas
var costs = prompt("Qual é o valor da saída?");

//porcentagem dos impostos
var taxPercent = prompt("Qual a porcentagem dos impostos?");

//renda bruta (Entrada - saídas)
var grossProfit = income - costs;

//obtendo o valor dos impostos (Renda Bruta * Imposto / 100)
var tax = grossProfit * taxPercent / 100

//renda liquida (Renda Bruta - Imposto)
var netIncome = grossProfit - tax

//mostrar na página web
document.write("Sua renda liquida é de $ " + netIncome);