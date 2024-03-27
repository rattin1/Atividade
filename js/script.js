function resp() {
    document.getElementById("resposta").innerHTML = "<h2>Resposta da Atividade</h2>"
    
}

//Exercicio 01
const exercicio1 = () => {
    resp()
    for (let i = 1; i <= 10; i++) {
        document.getElementById("resposta").innerHTML += `#${i}`
        
    }
}

//Exercicio 02
const exercicio2 = () => {
    resp()
    let num = document.getElementById("num").value;
    for (let n = 1; n <= num; n++) {
    if (n % 2 == 0) {
        document.getElementById("resposta").innerHTML += `#${n}`
    }
}
}

//Exercicio 03
const exercicio3 = () => {
    resp()
    if (num) {
        
    }
}

//Exercicio 04
const exercicio4 = () => {
    resp()
    for (let tabu = 1; tabu < 10; tabu++) {
        document.getElementById("resposta").innerHTML += `#${num*tabu}`
        
    }
        
    }
