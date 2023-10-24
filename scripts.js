const tabela = document.querySelector('.tabela-js')
console.log(tabela)

axios.get('https://apiaulas--isahanjos1801.repl.co/funcionarios').then(function(resposta){
    getData(resposta.data)
    // console.log(resposta.data[0].nome)
}).catch(function(error){
    console.log(error)
})

function getData(dados){
    dados.map((item)=>{
        tabela.innerHTML += `
        
    <tr>
        <th scope="row">${item.id}</th>
        <td>${item.nome}</td>
        <td>${item.cargo}</td>
        <td>${item.salario}</td>
        <td>
        <span class="material-symbols-outlined text-danger icon">
            delete
        </span>

        <span class="material-symbols-outlined text-success icon">
            edit
        </span>
    </td>
    </tr>
        `


    //    console.log(item.nome)
    //    console.log(item.cargo)
    //    console.log(item.salario)
    })
}



// then vai nos retornar a requisição, retornando os dados e objetos
// map vai percorrer os nossos objetos