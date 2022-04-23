
    function digitouNumero(numero) { // Atualiza o Display com o número digitado. 
      displayTela =   document.getElementById("displayTela"); // Buscar a tag do display pelo "id" e atribui na variavel "displaytela"
      displayTela.value = displayTela.value+numero; // Atribuir o Valor Atuar + o Número digitado. 
    }
    function limparTudo() {  
        displayTela =   document.getElementById("displayTela"); // Buscar a tag do display pelo "id" e atribui na variavel "displaytela"
        displayTela.value = "";  // atribuiu o "value" uma string(texto) vazio. 
      }

    function limparDel() {  
        displayTela =   document.getElementById("displayTela"); // 
        displayTela.value =  displayTela.value.substring(0,displayTela.value.length-1); // pega do inicio até o ultimo caractere -1. // length é o comprimento do texto.
      }

    function digitarPonto() {
        displayTela =   document.getElementById("displayTela"); // 
        // Se localizar um texto no display no caso ".", usando a função "indexOf" 
        // Vai retornar o index da localização da busca, caso não encontre retorna -1.
        if( displayTela.value.indexOf(".") == -1 ) { 
            // Não encontrou vou adicionar o ponto =)
            displayTela.value = displayTela.value + ".";  
        }
    }
    /* Intendifica Operações e Separa os números */
    function calcular (){
        displayTela =   document.getElementById("displayTela"); 
        if (displayTela.value == "08092004") {
            displayTela.value = "Feliz Aniversário Emburradinha ♥︎"; 
            return;
        } 
        
        // Busca no texto do display as operações usando a função match
        // Que faz o uso de expressão regular. 
        // Estudar Mais https://www.w3schools.com/js/js_string_search.asp
        let operacoes = displayTela.value.match(/\+|\−|÷|×/g); 
        console.log (operacoes); 
        let num1 = 0;
        let num2 = 0;
        if (operacoes.length == 1) { // 1 Operação 
            posicaoOp = displayTela.value.indexOf(operacoes[0]);
            num1 = displayTela.value.substring(0,posicaoOp);
            num2 = displayTela.value.substring(posicaoOp + 1);
            console.log (num1);
            console.log (num2);
            displayTela.value = displayTela.value+"=" + calculaOperacao(num1,num2,operacoes[0]); 
        } else if (operacoes.length == 2) { // 2 Operações 
            if (operacoes[0] == operacoes[1]) { // Se as 2 operações são Iguais
               if ( (operacoes[0] == "×") || (operacoes[0] == "÷") ) {
                displayTela.value = displayTela.value+"=" + "Error :("; // não pode ter duas multiplicações ou duas divisoes
               } else {
                posicaoOp = displayTela.value.lastIndexOf(operacoes[1]); // pegar a ultima operação
                num1 = displayTela.value.substring(0,posicaoOp);
                num2 = displayTela.value.substring(posicaoOp + 1);
                console.log (num1);
                console.log (num2);
                displayTela.value = displayTela.value+"=" + calculaOperacao(num1,num2,operacoes[1]);
               }
            } else { // Se as 2 operações são Diferentes
                if( ( displayTela.value.charAt(0) == "×") || (displayTela.value.charAt(0) == "÷" ) ) { // o primeiro operação não pode ser multiplicação e divisão
                    displayTela.value = displayTela.value+"=" + "Error :(";
                }else { 
                   if ((operacoes[0] == "×") || (operacoes[0] == "÷")) {
                    posicaoOp = displayTela.value.lastIndexOf(operacoes[0]);// buscar pelo 1° Operador 
                    num1 = displayTela.value.substring(0,posicaoOp);
                    num2 = displayTela.value.substring(posicaoOp + 1);
                    displayTela.value = displayTela.value+"=" + calculaOperacao(num1,num2,operacoes[0]);

                   } else {
                    posicaoOp = displayTela.value.lastIndexOf(operacoes[1]);// buscar pelo 2° Operador 
                    num1 = displayTela.value.substring(0,posicaoOp);
                    num2 = displayTela.value.substring(posicaoOp + 1);
                    displayTela.value = displayTela.value+"=" + calculaOperacao(num1,num2,operacoes[1]); 
                   }
                } 
                     
             } 
        } else if (operacoes.length == 3) { // 3 Operações
            if ( (operacoes[0] == operacoes[1]) && (operacoes[0] == operacoes[2]) ) { // 3 Operações Iguais 
                displayTela.value = displayTela.value+"=" + "Error :("; // Não podem ser iguais
             } else { 
                 if ( (operacoes[0] == "×") || (operacoes[0] == "÷") || (operacoes[2] == "×") || (operacoes[2] == "÷")) {
                    displayTela.value = displayTela.value+"=" + "Error :(";
                 } else {  
                    posicaoOp = displayTela.value.lastIndexOf(operacoes[1]); // pegar a 2 operação
                    num1 = displayTela.value.substring(0,posicaoOp);
                    num2 = displayTela.value.substring(posicaoOp + 1);
                    displayTela.value = displayTela.value+"=" + calculaOperacao(num1,num2,operacoes[1]);
                 }
             }
            

        } else{
            displayTela.value = displayTela.value+"=" + "Error :(";
        }
            
        
   
   
    }
    

/* Calcula a Operação com 2 números*/
function calculaOperacao (strNumero1,strNumero2,op) {
  numero1 = parseFloat (strNumero1.replace("−", "-")); // trocou o "menos" e converte de texto para numero Float
  numero2 = parseFloat (strNumero2.replace("−", "-")); 
  console.log (numero1);
  console.log (numero2);
  switch (op) {
      case '+':
          return numero1 + numero2;
          break;
      case '−':
          return numero1 - numero2;
          break;
      case '×':
          return numero1 * numero2;
          break;
      case '÷':
          return numero1 / numero2;
          break;
  }

}

