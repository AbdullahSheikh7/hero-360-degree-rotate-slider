const switchNext = () => {
    heroContentContainer.classList.add("switching")
    setTimeout(() => {
        heroContentContainer.classList.remove("switching")
    }, 875);
    btnNext.classList.add("click")
}

const switchBack = () => {
}

