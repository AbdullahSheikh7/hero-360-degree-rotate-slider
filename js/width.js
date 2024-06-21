const adjustHeroCircleContainerWidth = () => {
    let diameterPercent = ((Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2))) / document.body.clientWidth) * 100
    circlesSubcontainer.style.width = `${diameterPercent}%`;
    requestAnimationFrame(adjustHeroCircleContainerWidth)
}

adjustHeroCircleContainerWidth();
