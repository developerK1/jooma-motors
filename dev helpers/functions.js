const openModal = (event, id) =>{
    event.preventDefault()
    const elem = document.querySelector(`#${id}`);

    elem.classList.add("open-modal");
    console.log(`Modal ${elem} show be open at this time`)
}


const closeModal = (id) =>{
    const elem = document.querySelector(`#${id}`);

    elem.classList.remove("open-modal");
    console.log(`Modal ${elem} show be closed at this time`)
}



module.exports = {
    openModal, closeModal
}