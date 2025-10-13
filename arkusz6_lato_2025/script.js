function wykonaj(przycisk) {

    const li = przycisk.parentElement
    if (li.style.textDecoration === 'line-through') {
        li.style.textDecoration = 'none';
    } else {
        li.style.textDecoration = 'line-through';
    }
}

function dodaj() {
    const newElement = document.createElement("li")

    newElement.append(document.getElementById("dodaj_zadanie").value)

    const button = document.createElement('input');
    button.type = 'submit';
    button.value = 'Wykonane';
    button.setAttribute('onclick', 'wykonaj(this)');

    newElement.appendChild(button)

    document.getElementById("lista").appendChild(newElement)


}