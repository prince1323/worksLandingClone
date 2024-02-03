const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let loaderAnime = () => {
    let t = gsap.timeline();

    t.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out"
    })

    t.from("#yellow2", {
        top: "100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out"
    }, "yellow2Sync")

    t.to("#loader h1", {
        delay: 0.4,
        color: "black"
    }, "yellow2Sync")

    t.to("#loader", {
        opacity: 0
    })

    t.to("#loader", {
        display: "none"
    })
}
loaderAnime();


let page2Anime = () => {
    let elems = document.querySelectorAll(".elem");
    let page2 = document.querySelector("#page2")
    elems.forEach((e) => {
        e.addEventListener("mouseenter", () => {
            let bgImg = e.getAttribute("data-img");
            page2.style.backgroundImage = `url(${bgImg})`;
        })
    })
}
page2Anime();