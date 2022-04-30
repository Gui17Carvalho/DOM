function DeleteItem(){
    console.log(this.parentElement)
    this.parentElement.remove()
}

function EditItem(){
    textbox.readOnly = false
}

function SalvarItem(){
    textbox.readOnly = true
}

function CriarBotaoDelete(){
    const botao_delete =  document.createElement('button')
    botao_delete.classList.add("btn", "btn-danger")
    botao_delete.innerHTML = "Delete"
    botao_delete.type = "button"
    botao_delete.addEventListener("click", DeleteItem);

    return botao_delete
}

function CriarBotaoEdit(){
    const botao_Edit =  document.createElement('button')
    botao_Edit.classList.add("btn", "btn-warning")
    botao_Edit.innerHTML = "Edit"
    botao_Edit.type = "button"
    botao_Edit.addEventListener("click", EditItem);

    return botao_Edit
}

function CriarBotaoSalvar(){
    const botao_Salvar = document.createElement('button')
    botao_Salvar.classList.add("btn", "btn-success")
    botao_Salvar.type = "button"
    botao_Salvar.innerHTML = "Salvar"
    botao_Salvar.addEventListener("click", SalvarItem)

    return botao_Salvar
}


function Submit(){
    const lista = document.querySelector('[data-task]')
    const valor = document.querySelector('[data-form-input]')
    textbox = document.createElement('input')
    textbox.type = 'text'
    textbox.readOnly = true

    const novo_item_lista = document.createElement("li")
    novo_item_lista.className = "list-group-item";

    textbox.value = valor.value
 
    lista.appendChild (novo_item_lista)
    novo_item_lista.appendChild(CriarBotaoDelete())
    novo_item_lista.appendChild(CriarBotaoSalvar())
    novo_item_lista.appendChild(CriarBotaoEdit());
    novo_item_lista.appendChild(textbox)
    
    document.getElementById("item").value = ""
}













// function myFunction(){
//     console.log("teste inicial");
// }

// function addItem(){
//     const inputItem = document.querySelector('[data-form-input]')
//     const valorItem = inputItem.value

//     const listaDeItems = document.querySelector('[data-task]')

//     novaLabel = document.createElement('label')
//     novaLabel.innerText = valorItem
    
//     novoItem = document.createElement('li')

//     // novoItem.appendChild(criarBotaoConcluir())
//     novoItem.appendChild(novaLabel)
//     // novoItem.appendChild(criarBotaoDelete())

//     listaDeItems.appendChild(novoItem)

//     inputItem.value = ""
//}
