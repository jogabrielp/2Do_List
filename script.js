/* botão iniciar da primeira página
document.querySelector('#buttonIniciar').addEventListener('click', function(){
    window.open('todomain.html', '_self');
})
*/

//todomain

    let listaTarefas = [];

document.querySelector('#form-tarefa').addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    formJSON(formData);
    event.target.reset();
})

function formJSON(form){
    const tarefaObjeto = {
        nome: form.get('nome_tarefa'),
        importancia: form.get('importancia'),
        descricao: form.get('desc')
    }

    //const tarefaJSON = JSON.stringify(tarefaObjeto);

    listaTarefas.push(tarefaObjeto);
    console.log(listaTarefas.length);
    
    mostrarTarefas()
}
    
function mostrarTarefas(){
    const divTarefas = document.querySelector('#tarefas');
    divTarefas.innerHTML = ""

    listaTarefas.forEach((tarefa) => {
        const div = document.createElement("div");
        div.classList.add("task");

        div.innerHTML = `
        <div>
            <h3>${tarefa.nome}</h3>
            <p>${tarefa.importancia}</p>
            <p>${tarefa.descricao}</p>
        </div>
        `
        divTarefas.appendChild(div);
    })
}

