search = document.getElementById("searchId")
input = document.getElementById("inputId")
btn = document.getElementById("btnId")

btn.addEventListener('click', e =>{
    search.classList.toggle('active')
    input.focus()
} )
