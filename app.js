function listDone(){
    let ulMuUL =  document.getElementById("myUL")
    console.log(ulMuUL)
    let liMuULArray = ulMuUL.children
    for (index = 0; index < liMuULArray.length; index++){   
        liMuULArray[index].onclick = function() {
            this.classList.toggle("checked")
        }
    }
}
listDone()

function newElement(){
    let textInput = document.getElementById("myInput").value
    if (textInput == ""){
        alert("Nhap lai task!") 
    }
    else{
        let addInput = document.createTextNode(textInput)
        let removeButton = createRemoveButton()
        let addLi = document.createElement("li")
        addLi.appendChild(addInput)
        addLi.appendChild(removeButton)
        let myUL = document.getElementById("myUL")
        myUL.appendChild(addLi)
    }

}

function createRemoveButton(){
    let removeButton = document.createElement("button")
    removeButton.style.marginLeft = 'auto'
    removeButton.textContent = "X"
    removeButton.onclick = removeTodo
    return removeButton
}

function addRemoveButton(){
    let ulMuUL =  document.getElementById("myUL")
    let liMuULArray = ulMuUL.children
    for(let index = 0; index < liMuULArray.length; index++){
        const currentLi = liMuULArray[index]
        let removeButton = createRemoveButton()
        currentLi.style.display = "flex"
        currentLi.appendChild(removeButton)
    }
}
addRemoveButton()
function removeTodo(event){
    const liElement = event.target.parentElement;
    liElement.remove()
}