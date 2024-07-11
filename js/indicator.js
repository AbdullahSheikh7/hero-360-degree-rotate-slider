let imagesIndicatorElement = document.querySelector(".hero .images-indicator .indicator")

for (let i = 0; i < images.length - 1; i++) {
    imagesIndicator.append(imagesIndicatorElement.cloneNode())
}

const activeNext = () => {
    let now = Array.from(imagesIndicator.children)[currentImage];

    Array.from(imagesIndicator.children).forEach((e) => {
        e.classList.remove("inactive-back")
        e.classList.remove("active-back")
        e.classList.remove("active-next")
        e.classList.add("inactive-next")
    })

    now.classList.remove("inactive-next")
    now.classList.add("active-next")
}

const activeBack = () => {
    let now = Array.from(imagesIndicator.children)[currentImage];

    Array.from(imagesIndicator.children).forEach((e) => {
        e.classList.remove("active-back")
        e.classList.remove("active-next")
        e.classList.remove("inactive-next")
        e.classList.add("inactive-back")
    })

    now.classList.remove("inactive-back")
    now.classList.add("active-back")
}

activeNext()
