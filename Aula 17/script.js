document.querySelectorAll(".dropZone__input").forEach(inputElement => {
    const dropZoneElement = inputElement.closest(".container");

    dropZoneElement.addEventListener('dragover', e => {
        dropZoneElement.classList.add('container--over')
    })
})