const value1  = true;
const value2  = false;

// TruthyFalsy - variaveis vazias ou com valor 0, se submeter 
// a um teste lógico, ficam boolean.

if(value1){
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}   
// saida: Verdadeiro

if(!value1){
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}
// saida: Falso

const value3 = "";

if(value3){
    console.log('Verdadeiro');
} else {
    console.log('Falso');
} 
// saida: Falso


//Operador terniário
(logica) ? (então) : (senão)

const resultado = value3 ? 'Verdadeiro' : 'Falso';
console.log(resultado);
// saida: 

