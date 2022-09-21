function IMC(){
    var peso = parseInt(prompt("Por favor ingresa tu peso"));
    var altura = parseInt(prompt("Por favor ingresa tu altura"));
    var indice = parseInt(peso)/parseInt(altura^2);
    alert("Tu BMI es " + indice); 
    console.log("Tu BMI es " + indice);
}