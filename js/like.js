let like = document.querySelector("nav .like svg");

like.addEventListener("click", (e) => {
    if (like.getAttribute("fill") === "none") {
        like.setAttribute("fill", "#fff")
    } else {
        like.setAttribute("fill", "none")
    }
})
