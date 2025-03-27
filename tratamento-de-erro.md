
# Tratamento de erros  🫣 🏴‍☠️ 🫤  


###  🩻 Reference Error: variavel is not defined

🔎 O que significa: A variavel está fora do escopo

🛠 Como resolver: 

Exemplo 1 em que o retorno será o valor do parâmetro passado para a variável. Tudo certo aqui, pois o console.log foi chamado dentro do escopo da função!

    nome-da-função ("parâmetros")
    função nome-da-função (variável){
      imprima (variável)
    }

Esse exemplo em JS

    torrar("pão de forma")
    function torrar(pao){
      console.log("torrada feita com " + pao)
    }

Se eu der um outro console.log fora do escopo, dará esse erro de variável não definida, pois o contexto de definição da variável foi feita dentro da função, trata-se de escopo local.

    torrar("pão de forma")
    function torrar(pao){
      let nome = "Renata"
      console.log("torrada feita com " + pao)
    }
    console.log(nome)



###  🩻 Reference Error: Cannot access 'variável' before initialization

🔎 O que significa: O programa não entendeu que a variável chamada tem valor atribuído, pois a variável foi chamada antes da inicialização ( let deve ser usado dentro do seu escopo local). 

🛠 Como resolver: 

    torrar()
    let nome = "Renata"
    function torrar(){
      console.log(nome)
    }
    
Se quiser fazer isso funcionar use var que permite acesso global para definir a variável e lá dentro da função, atribua o valor.

    torrar()
    var nome 
    function torrar(){
      nome = "Renata"
      console.log(nome)
    }


###  🩻 Reference Error: Unexpected token " , "   vai mostrar também o espaço entre vírgulas vazio

🔎 O que significa: Quando passar os parâmetros dentro dos parênteses de uma função, o valor vazio deve ser passado no final, não pode ser passado no início ou no meio. E quando definir parâmetros padrões em escopo global - na falta de passagem de parâmetro no escopo global para sobrescrever, também é de boa prática colocar no final do espaço dentro dos parênteses.

🛠 Como resolver: 

    torrar("pão na chapa" , , 10.90)
   
    function torrar(pedido, nome = "cliente", valor){
      console.log("Nome do cliente: " + "valor do pedido: " + "pedido: ", nome, valor, pedido)
    }

Colocando na posição correta:

    torrar("pão na chapa" , 10.90)  <--- perceba que não há encontro de vírgulas, pois não há o que separar!
   
    function torrar(pedido, valor, nome = "cliente"){
      console.log("Nome do cliente: " + "valor do pedido: " + "pedido: ", nome, valor, pedido)
    }


###  🩻 Reference Error: 

🔎 O que significa: 

🛠 Como resolver: 
