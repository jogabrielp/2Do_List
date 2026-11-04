/* botão iniciar da primeira página
document.querySelector('#buttonIniciar').addEventListener('click', function(){
    window.open('todomain.html', '_self');
})
*/

//todomain

    let listaTarefas = [];

    // Quando enviado, pega o formulário e chama a função para transformá-la em objeto
document.querySelector('#form-tarefa').addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    formJSON(formData);
    event.target.reset();
})

    // Criação do objeto através do formulário
function formJSON(form){

    const tarefaObjeto = {
        id: crypto.randomUUID(),
        nome: form.get('nome_tarefa'),
        importancia: form.get('importancia'),
        descricao: form.get('desc'),
        data: form.get('date')
    }

    listaTarefas.push(tarefaObjeto);
    console.log(listaTarefas.length);
    
    mostrarTarefas()
}

    // Mostrar as tarefas adicionadas com botão de deleção (futuramente)
function mostrarTarefas(){

    const divTarefas = document.querySelector('#tarefas');
    divTarefas.innerHTML = ""

    listaTarefas.forEach(function(tarefa){
        const div = document.createElement("div");
        div.classList.add("task");

        const button = document.createElement('button');
        button.id = `${tarefa.id}`

        div.innerHTML = `
        <div>
            <h3>${tarefa.nome} / ${tarefa.data}</h3>
            <p>${tarefa.importancia}</p>
            <p>${tarefa.descricao}</p>
            <p>${tarefa.id}</p>
        </div>
        `
        button.innerHTML = `
        Excluir
        `
        divTarefas.appendChild(div);
        divTarefas.appendChild(button);
    })
}