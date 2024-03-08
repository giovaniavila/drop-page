const buttons = document.querySelectorAll("[data-carosel-arrowLeft]")

buttons.forEach(buttons => {
    buttons.addEventListener("click", () => {
        const offset = buttons.dataset.carouselButton === "next" ? 1 : -1
        const slides = buttons.closest("[data-carousel]").querySelector('[data-slides]')
    })
})