let enabled = true;

let currentImage = 0;

let images = [
    {
        image: 0,
        url: `${window.location.href}img/images/img1.webp`,
        title: "HIGHLANDS",
        subtitle: "Scotland"
    },
    {
        image: 1,
        url: `${window.location.href}img/images/img2.webp`,
        title: "SAHARA",
        subtitle: "Madagascar"
    },
    {
        image: 2,
        url: `${window.location.href}img/images/img3.webp`,
        title: "DOLOMITES",
        subtitle: "Italy"
    },
    {
        image: 0,
        url: `${window.location.href}img/images/img4.webp`,
        title: "MALDIVES",
        subtitle: "South Asia"
    }
]

const firstImage = () => {
    circle3.style.backgroundImage = `url('${images[currentImage].url}')`;
    circle2.style.backgroundImage = `url('${images[currentImage].url}')`;
    circle1.style.backgroundImage = `url('${images[currentImage].url}')`;
    heroContentContainerTitle.innerHTML = (images[currentImage].title).toUpperCase();
    heroContentContainerSubtitle.innerHTML = images[currentImage].subtitle.toUpperCase();
}

const changeCurrentImage = (direction) => {
    if (direction == "next") {
        currentImage += 1
        if (currentImage >= images.length) {
            currentImage = 0
        }
    } else if (direction == "back") {
        currentImage -= 1
        if (currentImage < 0) {
            currentImage = images.length - 1;
        }
    }
}

const switchNext = () => {
    if (enabled) {
        enabled = false
        changeCurrentImage("next")

        btnNext.classList.add("click")

        circle3.style.backgroundImage = `url('${images[currentImage].url}')`
        circle2.style.backgroundImage = `url('${images[currentImage].url}')`
        circle1.style.backgroundImage = `url('${images[currentImage].url}')`

        circlesContainer.classList.add("next")
        heroContentContainer.classList.add("switching")

        setTimeout(() => {
            heroContentContainerTitle.innerHTML = (images[currentImage].title).toUpperCase();
            heroContentContainerSubtitle.innerHTML = images[currentImage].subtitle.toUpperCase();
        }, 1200);

        setTimeout(() => {
            btnNext.classList.remove("click")
        }, 250);

        setTimeout(() => {
            circlesContainer.classList.remove("next")
            heroContentContainer.classList.remove("switching")
            enabled = true
        }, 1700);

        activeNext()
    }
}

const switchBack = () => {
    if (enabled) {
        enabled = false
        changeCurrentImage("back")

        btnBack.classList.add("click")

        circle3.style.backgroundImage = `url('${images[currentImage].url}')`
        circle2.style.backgroundImage = `url('${images[currentImage].url}')`
        circle1.style.backgroundImage = `url('${images[currentImage].url}')`

        circlesContainer.classList.add("back")
        heroContentContainer.classList.add("switching")

        setTimeout(() => {
            heroContentContainerTitle.innerHTML = (images[currentImage].title).toUpperCase();
            heroContentContainerSubtitle.innerHTML = images[currentImage].subtitle.toUpperCase();
        }, 1200);

        setTimeout(() => {
            btnBack.classList.remove("click")
        }, 250);

        setTimeout(() => {
            circlesContainer.classList.remove("back")
            heroContentContainer.classList.remove("switching")
            enabled = true
        }, 1700);

        activeBack()
    }
}

firstImage()
