let userName = getFistName("Renata-Silva-Bezerra", "-") //pegando o primeiro nome e especificando como parâmetro o separador
console.log("Welcome " + userName)

userName = getFistName("Rafaela Bezerra de Figueiredo") //pegando o primeiro nome sem especificar o separador
console.log("Welcome " + userName)

function getFistName(name, splitChar = (" ")){ //splitChar é o caractere que vai dividir a string em um array | deixei dinâmico passando parâmetro padrão caso não seja passado
    // Exemplo: "Renata-Silva-Bezerra" - "-" => ["Renata", "Silva", "Bezerra"] 

    let firstName = name.split(splitChar)[0] //pegando a primeira posição do array
    return firstName
}