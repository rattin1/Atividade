function resp() {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
}

//Exercicio 01
const exercicio1 = () => {
  resp();
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `#${i}`;
  }
};

//Exercicio 02
const exercicio2 = () => {
  resp();
  let num = document.getElementById("num").value;
  for (let n = 1; n <= num; n++) {
    if (n % 2 == 0) {
      document.getElementById("resposta").innerHTML += `#${n}`;
    }
  }
};

//Exercicio 03
const exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num <= 1) {
    error.innerText = `O número ${num} não é primo.`;
  } else {
    error.innerText = "";
    result.innerText = "";
    let primo = true; //declarei variavel para primo
    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false; // % resto da divisão
    }
    primo
      ? (result.innerText = `O número ${num} é primo!`)
      : (result.innerText = `O número ${num} não é primo!`);
  }
};

//Exercicio 04
const exercicio4 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let resul = document.getElementById("resultado");

  resul.innerText = "";
  error.innerText = "";
  for (let i = 0; i <= 10; i++) {
    if (num <= 0) {
      error.innerText = `O número ${num} é inválido.`;
    } else {
      resul.innerHTML += `<h1>${num} x ${i} = ${num * i}<h1/>`;
    }
  }
};

//Exercício 05
const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let resul = document.getElementById("resultado");
  let i = 0;
  resul.innerHTML = "";
  while (i < num) {
    i++;
    if (i % 2 == 1) resul.innerText += `#${i}`;
  }
};
//Exercicio 06
const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let soma = 0;
  let resul = document.getElementById("resultado");
  let i = 0;
  resul.innerHTML = "";
  while (i < num) {
    i++;
    if (i % 2 == 0) soma += i;
    resul.innerText = `#${soma}`;
  }
};

//Exercicio 07
const exercicio7 = () => {
  let i = 11;
  let resul = document.getElementById("resultado");
  resul.innerHTML = "";
  while (i > 1) {
    i--;
    resul.innerText += `#${i}`;
  }
};

//Exercicio 08
const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  if (palavra == "") {
    error.innerText = "Favor informar uma palavra!";
  } else {
    for (let i = 1; i <= palavra.length; i++) {
      inversa += palavra.charAt(palavra.length - i);
    }

    palavra.toLowerCase() == inversa.toLowerCase()
      ? (result.innerText = "A palavra é um palíndromo!")
      : (error.innerText = "A palavra não é um palíndromo!");
  }
};

//Exercicio 09
const exercicio9 = () => {
  let resul = document.getElementById("resultado");
  let soma = 0;
  for (let i = 0; i <= 100; i++) {
    soma += i;
    resul.innerText = `#${soma}`;
  }
};

//Exercicio 10
const exercicio10 = () => {
  let num = document.getElementById("num").value;
  let soma = 0;
  let resul = document.getElementById("resultado");
  let i = 0;
  resul.innerHTML = "";
  while (i < num) {
    i++;
    soma += i;
    resul.innerText = `#${soma / num}`;
  }
};

//Exercicio 11
const exercicio11 = () => {
  let resul = document.getElementById("resultado");
  resul.innerHTML = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      resul.innerHTML += `#${i}`;
    }
  }
};

//Exercicio 12
const exercicio12 = () => {
  let num = document.getElementById("num").value;
  let soma = 0;
  let resul = document.getElementById("resultado");

  for (let i = 0; i <= num; i++) {
    soma += i;
    resul.innerText = `#${soma}`;
  }
};

//Exercicio 13
const exercicio13 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num = 0

  if (num > num1) {
    error.innerText = "";
    result.innerText = "";
    let primo = true; //declarei variavel para primo
    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false; // % resto da divisão
    }
    primo
      ? (result.innerText = `O número ${num} é primo!`)
      : (result.innerText = `O número ${num} não é primo!`);
  }
  if (num > num2) {
    
  } 
};
  
  


//Exercicio 14
const exercicio14 = () => {
  let A = document.getElementById("num1").value;
  let B = document.getElementById("num2").value;
  let resul = document.getElementById("resultado");

  resul.innerText = `A área do retângulo é ${A * B}`;
};

//Exercicio 15

//Exercicio 16
const exercicio16 = () => {
  let A = document.getElementById("num1").value;
  let resul = document.getElementById("resultado");

  resul.innerText = `A área do circulo é ${3.14*A**2}`;
};

//Exercicio 17
const exercicio17 = () => {
  let A = document.getElementById("num1").value;
  let B = document.getElementById("num2").value;
  let resul = document.getElementById("resultado");

  resul.innerText = `A área do triângulo é ${(A * B) / 2}`;
};

//Exercicio 18
const exercicio18 = () => {
  let A = document.getElementById("num1").value;
  let B = document.getElementById("num2").value;
  let C = document.getElementById("num3").value;
  let resul = document.getElementById("resultado");
  const area = ((parseFloat(A) + parseFloat(B)) * C) / 2;

  resul.innerText = `A área do trapézio é ${area}`;
};

//Exercicio 19
const exercicio19 = () => {
  let data = new Date(document.getElementById("data").value)
  let dataAtual = new Date();
  let nasc = data.getFullYear()
  let ano = dataAtual.getFullYear()
  let idade = ano - nasc
  let resul = document.getElementById("resultado");

  resul.innerText = idade
  


}

//Exercicio 20
const exercicio20 = () => {
  let frase = document.getElementById("frase").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  if (frase == "") {
    error.innerText = "Favor informar uma frase!";
  } else {
    for (let i = 1; i <= frase.length; i++) {
      inversa += frase.charAt(frase.length - i);
    }
    
    result.innerText = inversa
  }
}

//Exercicio 21

//Exercicio 22
const exercicio22 = () => {
  let resul = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let soma = 0;
  let num = document.getElementById("num").value;
  error.innerText = "";
  resul.innerText = "";


  if (num <100) {
    error.innerText = "Favor informar um número superior ou igual a 100!";
    
  } else {
  for (let i = 0; i <= num; i++) {
    soma += i;
    resul.innerText = `#${soma}`;
   }
  }
};

//Exercicio 23
const exercicio23 = () => {

}

//Exercicio 24