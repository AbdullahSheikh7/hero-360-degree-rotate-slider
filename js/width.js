const adjustHeroCircleContainerWidth = () => {
  circlesSubcontainer.style.width = `${(Math.sqrt(Math.pow(document.body.clientWidth, 2) + Math.pow(document.body.clientHeight, 2)) / document.body.clientWidth) * 100}%`;
  requestAnimationFrame(adjustHeroCircleContainerWidth);
};

adjustHeroCircleContainerWidth();
