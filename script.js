function Converter() {
  let input = parseFloat(document.getElementById("valor_inicial").value);
  let output = document.getElementById("resultado");
  let de = document.getElementById("moedasde");
  let para = document.getElementById("moedaspara");
  
  console.log(de.value)

  //Reais
    if (de.value == "BRL" && para.value != "Moeda 2"){ 
      let valorEmReal = input;
      let valor;

      if (para.value == "BRL"){
        valor = "O valor em reais é: R$" + valorEmReal.toFixed(2);
      } else if (para.value == "EUR") {
        valor = "O valor em euros é: €" + (valorEmReal * 0.16).toFixed(2);
      } else if (para.value == "USD") {
        valor = "O valor em dólar é: $" + (valorEmReal * 0.19).toFixed(2);
      }
       output.innerHTML = valor;
    } else {
     // output.innerHTML = '';
      }
    
      


    //Dolar
      if (de.value == "USD" && para.value != "Moeda 2"){
        let valorEmDolar = input;
        let valor1;

        if (para.value == "USD") {
          valor1 = "O valor em dolar é: $" + valorEmDolar.toFixed(2);
        } else if (para.value == "EUR") {
          valor1 = "O valor em euros é: €" + (valorEmDolar * 0.98).toFixed(2);
        } else if (para.value == "BRL") {
          valor1 = "O valor em reais é: R$" + ( valorEmDolar * 5.27).toFixed(2);
        }
         output.innerHTML = valor1;
        } else {
        // output.innerHTML = '';
        }
      
        

    //Euro  
    if (de.value == "EUR" && para.value != "Moeda 2") {
      let valorEmEuro = input;
      let valor2;

      if (para.value == "EUR") {
        valor2 = "O valor em euros é: €" + valorEmEuro.toFixed(2);
      } else if (para.value == "USD") {
        valor2 = "O valor em dolar é: $" + (valorEmEuro * 1.02).toFixed(2);
      } else if (para.value == "BRL") {
        valor2 = "O valor em reais é: R$" + (valorEmEuro * 5.35).toFixed(2);
      }
        output.innerHTML = valor2;
      } else {
        //output.innerHTML = '';
      } 
  

}  //function     
 



