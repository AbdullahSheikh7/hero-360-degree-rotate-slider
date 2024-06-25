let enabled = true;

let currentImage = 0;

let images = [
    {
        image: 0,
        url: "../img/images/img1.jpg",
        title: "HYDRANGEAS",
        subtitle: "Abdullah"
    },
    {
        image: 1,
        url: "../img/images/img2.jpg",
        title: "DESERT",
        subtitle: "Tehreem"
    },
    {
        image: 2,
        url: "../img/images/img3.jpg",
        title: "CHRYSANTHEMUM",
        subtitle: "Nadia"
    }
]

const firstImage = () => {
    circle3.style.backgroundImage = `url('${ images[currentImage].url }')`;
    circle2.style.backgroundImage = `url('${ images[currentImage].url }')`;
    circle1.style.backgroundImage = `url('${ images[currentImage].url }')`;
    heroContentContainerTitle.innerHTML = (images[currentImage].title).toUpperCase();
    heroContentContainerSubtitle.innerHTML = images[currentImage].subtitle;
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

        circle3.style.backgroundImage = `url('${ images[currentImage].url }')`
        circle2.style.backgroundImage = `url('${ images[currentImage].url }')`
        circle1.style.backgroundImage = `url('${ images[currentImage].url }')`

        circlesContainer.classList.add("next")
        heroContentContainer.classList.add("switching")

        setTimeout(() => {
            heroContentContainerTitle.innerHTML = (images[currentImage].title).toUpperCase();
            heroContentContainerSubtitle.innerHTML = images[currentImage].subtitle;
        }, 1100);

        setTimeout(() => {
            btnNext.classList.remove("click")
        }, 250);

        setTimeout(() => {
            circlesContainer.classList.remove("next")
            heroContentContainer.classList.remove("switching")
            enabled = true
        }, 2200);
    }
}

const switchBack = () => {
    if (enabled) {
        enabled = false
        changeCurrentImage("back")

        btnBack.classList.add("click")

        circle3.style.backgroundImage = `url('${ images[currentImage].url }')`
        circle2.style.backgroundImage = `url('${ images[currentImage].url }')`
        circle1.style.backgroundImage = `url('${ images[currentImage].url }')`

        circlesContainer.classList.add("back")
        heroContentContainer.classList.add("switching")

        setTimeout(() => {
            heroContentContainerTitle.innerHTML = (images[currentImage].title).toUpperCase();
            heroContentContainerSubtitle.innerHTML = images[currentImage].subtitle;
        }, 1100);

        setTimeout(() => {
            btnBack.classList.remove("click")
        }, 250);

        setTimeout(() => {
            circlesContainer.classList.remove("back")
            heroContentContainer.classList.remove("switching")
            enabled = true
        }, 2200);
    }
}

firstImage()
