hbBtn = document.getElementById("hb-btn")
crossBtn = document.getElementById("cross-btn")
body = document.querySelector('.body')
containerFull = document.querySelector('.container-full')
nav = document.getElementById("nav")

hbBtn.addEventListener('click', e => {
    containerFull.classList.add("rotate")
    crossBtn.classList.remove("hide")
    hbBtn.classList.add("hide")
    e.preventDefault()
    nav.classList.add("animation")
    nav.classList.remove("animation-back")

})


crossBtn.addEventListener('click', e => {
    containerFull.classList.remove("rotate")
    crossBtn.classList.add("hide")
    hbBtn.classList.remove("hide")
    e.preventDefault()
    nav.classList.remove("animation")
    nav.classList.add("animation-back")

})